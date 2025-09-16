import { z } from 'zod';
export const TenantUserRoleFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  createdAt: z.date(),
  tenantUserId: z.string(),
  roleId: z.string(),
  tenantUser: z.unknown(),
  role: z.unknown()
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