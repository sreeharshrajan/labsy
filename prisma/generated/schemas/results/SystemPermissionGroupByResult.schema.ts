import { z } from 'zod';
export const SystemPermissionGroupByResultSchema = z.array(z.object({
  id: z.string(),
  action: z.string(),
  resource: z.string(),
  conditions: z.unknown(),
  roleTemplateId: z.string(),
  _count: z.object({
    id: z.number(),
    action: z.number(),
    resource: z.number(),
    conditions: z.number(),
    roleTemplateId: z.number(),
    roleTemplate: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    action: z.string().nullable(),
    resource: z.string().nullable(),
    roleTemplateId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    action: z.string().nullable(),
    resource: z.string().nullable(),
    roleTemplateId: z.string().nullable()
  }).nullable().optional()
}));