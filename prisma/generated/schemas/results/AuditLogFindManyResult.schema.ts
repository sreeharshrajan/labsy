import { z } from 'zod';
export const AuditLogFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  action: z.unknown(),
  metadata: z.unknown().optional(),
  entity: z.string().optional(),
  entityId: z.string().optional(),
  ipAddress: z.string().optional(),
  userAgent: z.string().optional(),
  createdAt: z.date(),
  tenantId: z.string(),
  userId: z.string().optional(),
  tenant: z.unknown(),
  user: z.unknown().optional()
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