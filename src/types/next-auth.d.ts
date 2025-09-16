// NextAuth type extensions

import type { DefaultSession, DefaultUser } from 'next-auth';
import type { DefaultJWT } from 'next-auth/jwt';
import type { Tenant, TenantRole } from '@prisma/client';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string;
      isSuperAdmin: boolean;
      tenantId: string | null;
      tenant: Tenant | null;
      roles: TenantRole[];
    } & DefaultSession['user'];
  }

  interface User extends DefaultUser {
    isSuperAdmin: boolean;
    tenantId: string | null;
    tenant: Tenant | null;
    roles: TenantRole[];
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    userId: string;
    isSuperAdmin: boolean;
    tenantId: string | null;
    tenant: Tenant | null;
    roles: TenantRole[];
  }
}

// Extended NextAuth types for our app
export interface ExtendedSession extends Session {
  user: {
    id: string;
    email: string;
    name: string | null;
    image: string | null;
    isSuperAdmin: boolean;
    tenantId: string | null;
    tenant: Tenant | null;
    roles: TenantRole[];
  };
}

export interface AuthUser {
  id: string;
  email: string;
  name: string | null | undefined;
  image: string | null | undefined;
  isSuperAdmin: boolean;
  tenantId: string | null;
  tenant: Tenant | null;
  roles: TenantRole[];
}

// Auth context types
export interface AuthContextType {
  user: AuthUser | null;
  session: ExtendedSession | null;
  isLoading: boolean;
  signIn: (provider?: string, options?: any) => Promise<any>;
  signOut: (options?: any) => Promise<any>;
  update: (data?: any) => Promise<any>;
}

// Auth provider props
export interface AuthProviderProps {
  children: React.ReactNode;
}
