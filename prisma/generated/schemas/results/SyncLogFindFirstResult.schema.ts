import { z } from 'zod';
export const SyncLogFindFirstResultSchema = z.nullable(z.object({
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
}));