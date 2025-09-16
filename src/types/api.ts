// API-related types

import type { User, PrismaClient } from '@prisma/client';

// Generic API response wrapper
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Pagination types
export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// Auth API types
export interface LoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface LoginResponse {
  user: User;
  session: {
    expires: string;
  };
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  phone?: string;
}

export interface RegisterResponse {
  user: User;
  message: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ForgotPasswordResponse {
  message: string;
}

export interface ResetPasswordRequest {
  token: string;
  password: string;
}

export interface ResetPasswordResponse {
  message: string;
}

// Post API types
export interface CreatePostRequest {
  title: string;
  content: string;
  published?: boolean;
}

export interface UpdatePostRequest {
  title?: string;
  content?: string;
  published?: boolean;
}

export interface PostResponse {
  id: string;
  title: string;
  content: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  author: {
    id: string;
    name: string | null;
    email: string;
  };
}

// Tenant API types
export interface CreateTenantRequest {
  name: string;
  description?: string;
}

export interface UpdateTenantRequest {
  name?: string;
  description?: string;
}

export interface TenantResponse {
  id: string;
  name: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
  _count: {
    users: number;
  };
}

// Error types
export interface ApiError {
  message: string;
  code?: string;
  statusCode: number;
  details?: Record<string, unknown>;
}

// Request/Response utility types
export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface RequestConfig {
  method: RequestMethod;
  headers?: Record<string, string>;
  body?: unknown;
  timeout?: number;
}

// tRPC types
export interface TRPCContext {
  session: {
    user: User;
  } | null;
  db: PrismaClient; // Prisma client
}

export interface TRPCMeta {
  requiresAuth?: boolean;
  requiredRoles?: string[];
  rateLimit?: {
    max: number;
    windowMs: number;
  };
}
