import { z } from 'zod';
export const TenantPermissionFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  action: z.string(),
  resource: z.string(),
  roleId: z.string(),
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