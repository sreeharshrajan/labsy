// Reusable Zod schemas for validation

import { z } from 'zod';

// Common validation patterns
export const emailSchema = z.string().email('Invalid email address');
export const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/\d/, 'Password must contain at least one number')
  .regex(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, 'Password must contain at least one special character');

export const nameSchema = z
  .string()
  .min(1, 'Name is required')
  .max(100, 'Name must be less than 100 characters')
  .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces');

export const phoneSchema = z
  .string()
  .regex(/^\+?[\d\s\-\(\)]+$/, 'Invalid phone number format')
  .optional();

// User-related schemas
export const userRegistrationSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  password: passwordSchema,
  phone: phoneSchema,
});

export const userLoginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, 'Password is required'),
  rememberMe: z.boolean().optional(),
});

export const forgotPasswordSchema = z.object({
  email: emailSchema,
});

export const resetPasswordSchema = z.object({
  token: z.string().min(1, 'Reset token is required'),
  password: passwordSchema,
});

// Post-related schemas
export const postCreateSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title must be less than 200 characters'),
  content: z.string().min(1, 'Content is required'),
  published: z.boolean().optional().default(false),
});

export const postUpdateSchema = postCreateSchema.partial();

// Tenant-related schemas
export const tenantCreateSchema = z.object({
  name: z.string().min(1, 'Tenant name is required').max(100, 'Tenant name must be less than 100 characters'),
  description: z.string().max(500, 'Description must be less than 500 characters').optional(),
});

export const tenantUpdateSchema = tenantCreateSchema.partial();

// Pagination schema
export const paginationSchema = z.object({
  page: z.number().int().positive().default(1),
  limit: z.number().int().positive().max(100).default(10),
  sortBy: z.string().optional(),
  sortOrder: z.enum(['asc', 'desc']).default('desc'),
});

// Search schema
export const searchSchema = z.object({
  query: z.string().min(1, 'Search query is required'),
  ...paginationSchema.shape,
});

// File upload schema
export const fileUploadSchema = z.object({
  file: z.instanceof(File),
  maxSize: z.number().optional().default(5 * 1024 * 1024), // 5MB default
  allowedTypes: z.array(z.string()).optional(),
});

// Utility functions for validation
export function validateEmail(email: string): boolean {
  return emailSchema.safeParse(email).success;
}

export function validatePassword(password: string): { isValid: boolean; errors: string[] } {
  const result = passwordSchema.safeParse(password);
  return {
    isValid: result.success,
    errors: result.success ? [] : result.error.errors.map(err => err.message),
  };
}

export function validatePhone(phone: string): boolean {
  return phoneSchema.safeParse(phone).success;
}
