import { z } from 'zod';
export const SystemRoleTemplateFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  role: z.unknown(),
  name: z.string(),
  description: z.string().optional(),
  isDefault: z.boolean(),
  tenantRoles: z.array(z.unknown()),
  permissions: z.array(z.unknown())
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