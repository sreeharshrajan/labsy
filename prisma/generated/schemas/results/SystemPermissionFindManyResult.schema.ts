import { z } from 'zod';
export const SystemPermissionFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  action: z.string(),
  resource: z.string(),
  conditions: z.unknown().optional(),
  roleTemplateId: z.string(),
  roleTemplate: z.unknown()
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