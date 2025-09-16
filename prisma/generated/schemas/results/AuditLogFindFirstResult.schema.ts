import { z } from 'zod';
export const AuditLogFindFirstResultSchema = z.nullable(z.object({
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
}));