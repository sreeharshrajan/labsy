import { PrismaAdapter } from "@auth/prisma-adapter";
import { type DefaultSession, type NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import { db } from "@/server/db";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      isSuperAdmin: boolean;
      tenantId: string | null;
      tenant: any | null;
      roles: any[];
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    isSuperAdmin: boolean;
    tenantId: string | null;
    tenant: any | null;
    roles: any[];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userId: string;
    isSuperAdmin: boolean;
    tenantId: string | null;
    tenant: any | null;
    roles: any[];
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        rememberMe: { label: "Remember Me", type: "checkbox" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          // Find user by email
          const user = await db.user.findUnique({
            where: { email: credentials.email.toLowerCase() },
            include: {
              tenants: {
                include: {
                  tenant: true,
                  tenantRoles: {
                    include: {
                      role: {
                        include: {
                          permissions: true,
                        },
                      },
                    },
                  },
                },
              },
            },
          });

          if (!user || !user.passwordHash) {
            return null;
          }

          // Verify password
          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            user.passwordHash
          );

          if (!isPasswordValid) {
            return null;
          }

          // Check user status
          if (user.status !== 'ACTIVE') {
            return null;
          }

          // Return user object
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            image: user.image,
            isSuperAdmin: user.isSuperAdmin,
            tenantId: user.tenants[0]?.tenantId,
            tenant: user.tenants[0]?.tenant,
            roles: user.tenants[0]?.tenantRoles?.map(tr => tr.role) ?? [],
          };
        } catch (error) {
          console.error('Credentials authorization error:', error);
          return null;
        }
      },
    }),
  ],
  adapter: PrismaAdapter(db),
  callbacks: {
    async jwt({ token, user, account }) {
      // If this is the initial sign in, add user data to token
      if (user) {
        token.userId = user.id;
        token.isSuperAdmin = (user as any).isSuperAdmin ?? false;
        token.tenantId = (user as any).tenantId ?? null;
        token.tenant = (user as any).tenant ?? null;
        token.roles = (user as any).roles ?? [];
      }
      return token;
    },
    async session({ session, token }) {
      // Add user data to session
      if (token) {
        session.user.id = token.userId as string;
        session.user.isSuperAdmin = token.isSuperAdmin as boolean;
        session.user.tenantId = token.tenantId as string | null;
        session.user.tenant = token.tenant as any;
        session.user.roles = token.roles as any[];
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: '/login',
    signUp: '/register',
  },
} satisfies NextAuthConfig;
