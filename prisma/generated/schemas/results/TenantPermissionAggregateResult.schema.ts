import { z } from 'zod';
export const TenantPermissionAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    action: z.number(),
    resource: z.number(),
    roleId: z.number(),
    role: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    action: z.string().nullable(),
    resource: z.string().nullable(),
    roleId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    action: z.string().nullable(),
    resource: z.string().nullable(),
    roleId: z.string().nullable()
  }).nullable().optional()});