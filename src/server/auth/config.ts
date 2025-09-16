import { PrismaAdapter } from "@auth/prisma-adapter";
import { type DefaultSession, type NextAuthConfig } from "next-auth";
import { type JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import { db } from "@/server/db";
import type { Tenant } from "@prisma/client";
import type { TenantRole } from "@prisma/client";

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
      tenant: Tenant | null;
      roles: TenantRole[];
    } & DefaultSession["user"];
  }
}

// JWT type extension
interface ExtendedJWT extends JWT {
  userId: string;
  isSuperAdmin: boolean;
  tenantId: string | null;
  tenant: Tenant | null;
  roles: TenantRole[];
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID ?? '',
      clientSecret: process.env.AUTH_GOOGLE_SECRET ?? '',
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        rememberMe: { label: "Remember Me", type: "checkbox" },
      },
      async authorize(credentials) {
        if (!credentials.email || !credentials.password) {
          return null;
        }

        try {
          // Find user by email
          const user = await db.user.findUnique({
            where: { email: (credentials.email as string).toLowerCase() },
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
            credentials.password as string,
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
    async jwt({ token, user }): Promise<ExtendedJWT> {
      // If this is the initial sign in, add user data to token
      if (user?.id) {
        (token as ExtendedJWT).userId = user.id;
        const userWithExtras = user as any;
        (token as ExtendedJWT).isSuperAdmin = userWithExtras.isSuperAdmin ?? false;
        (token as ExtendedJWT).tenantId = userWithExtras.tenantId ?? null;
        (token as ExtendedJWT).tenant = userWithExtras.tenant ?? null;
        (token as ExtendedJWT).roles = userWithExtras.roles ?? [];
      }
      return token as ExtendedJWT;
    },
    async session({ session, token }) {
      // Add user data to session
      const extendedToken = token as ExtendedJWT;
      session.user.id = extendedToken.userId;
      session.user.isSuperAdmin = extendedToken.isSuperAdmin;
      session.user.tenantId = extendedToken.tenantId;
      session.user.tenant = extendedToken.tenant;
      session.user.roles = extendedToken.roles;
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: '/login',
  },
} satisfies NextAuthConfig;
