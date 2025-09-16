import { z } from 'zod';
export const TenantRoleGroupByResultSchema = z.array(z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  isSystem: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  systemRoleTemplateId: z.string(),
  tenantId: z.string(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    description: z.number(),
    isSystem: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    permissions: z.number(),
    systemRoleTemplateId: z.number(),
    systemRoleTemplate: z.number(),
    tenantId: z.number(),
    tenant: z.number(),
    TenantUserRole: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    systemRoleTemplateId: z.string().nullable(),
    tenantId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    systemRoleTemplateId: z.string().nullable(),
    tenantId: z.string().nullable()
  }).nullable().optional()
}));