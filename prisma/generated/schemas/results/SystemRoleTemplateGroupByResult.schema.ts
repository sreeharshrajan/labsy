import { z } from 'zod';
export const SystemRoleTemplateGroupByResultSchema = z.array(z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  isDefault: z.boolean(),
  _count: z.object({
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
  }).nullable().optional()
}));