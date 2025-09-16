import { z } from 'zod';
export const TenantUserFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional(),
  tenantRoles: z.array(z.unknown()),
  userId: z.string(),
  tenantId: z.string(),
  user: z.unknown(),
  tenant: z.unknown(),
  Report: z.array(z.unknown()),
  reportUpdates: z.array(z.unknown()),
  collectedBy: z.array(z.unknown())
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