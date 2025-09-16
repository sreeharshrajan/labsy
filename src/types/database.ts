// Database types derived from Prisma

import type { User, Post, Tenant, TenantRole, Role } from '@prisma/client';

export type { User, Post, Tenant, TenantRole, Role };

// Extended types with relations
export interface UserWithRelations extends User {
  tenants: Array<{
    tenant: Tenant;
    tenantRoles: Array<{
      role: Role & {
        permissions: any[];
      };
    }>;
  }>;
}

export interface PostWithAuthor extends Post {
  author: User;
}

export interface TenantWithUsers extends Tenant {
  users: Array<{
    user: User;
    tenantRoles: Array<{
      role: Role;
    }>;
  }>;
}

// Database query result types
export interface UserQueryResult {
  id: string;
  email: string;
  name: string | null;
  image: string | null;
  isSuperAdmin: boolean;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface PostQueryResult {
  id: string;
  title: string;
  content: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  authorId: string;
  author: {
    name: string | null;
    email: string;
  };
}

export interface TenantQueryResult {
  id: string;
  name: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
  _count: {
    users: number;
  };
}

// Database operation types
export interface CreateUserData {
  name: string;
  email: string;
  passwordHash: string;
  phone?: string;
  isSuperAdmin?: boolean;
}

export interface UpdateUserData {
  name?: string;
  email?: string;
  phone?: string;
  status?: string;
}

export interface CreatePostData {
  title: string;
  content: string;
  published?: boolean;
  authorId: string;
}

export interface UpdatePostData {
  title?: string;
  content?: string;
  published?: boolean;
}

export interface CreateTenantData {
  name: string;
  description?: string;
}

export interface UpdateTenantData {
  name?: string;
  description?: string;
}
