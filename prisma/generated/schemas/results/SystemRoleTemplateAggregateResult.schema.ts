import { z } from 'zod';
export const SystemRoleTemplateAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    role: z.number(),
    name: z.number(),
    description: z.number(),
    isDefault: z.number(),
    tenantRoles: z.number(),
    permissions: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable()
  }).nullable().optional()});