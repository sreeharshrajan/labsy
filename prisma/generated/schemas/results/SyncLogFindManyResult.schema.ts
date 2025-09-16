import { z } from 'zod';
export const SyncLogFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  tenantId: z.string(),
  entity: z.string(),
  entityId: z.string(),
  details: z.unknown().optional(),
  status: z.unknown(),
  operation: z.unknown(),
  syncedAt: z.date(),
  startedAt: z.date(),
  tenant: z.unknown()
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