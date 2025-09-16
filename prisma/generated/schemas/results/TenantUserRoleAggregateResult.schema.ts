import { z } from 'zod';
export const TenantUserRoleAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    createdAt: z.number(),
    tenantUserId: z.number(),
    roleId: z.number(),
    tenantUser: z.number(),
    role: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    createdAt: z.date().nullable(),
    tenantUserId: z.string().nullable(),
    roleId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    createdAt: z.date().nullable(),
    tenantUserId: z.string().nullable(),
    roleId: z.string().nullable()
  }).nullable().optional()});