import { z } from 'zod';
export const TenantRoleFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  isSystem: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  permissions: z.array(z.unknown()),
  systemRoleTemplateId: z.string().optional(),
  systemRoleTemplate: z.unknown().optional(),
  tenantId: z.string(),
  tenant: z.unknown(),
  TenantUserRole: z.array(z.unknown())
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});