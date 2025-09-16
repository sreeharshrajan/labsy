import { z } from 'zod';
export const AuditLogGroupByResultSchema = z.array(z.object({
  id: z.string(),
  metadata: z.unknown(),
  entity: z.string(),
  entityId: z.string(),
  ipAddress: z.string(),
  userAgent: z.string(),
  createdAt: z.date(),
  tenantId: z.string(),
  userId: z.string(),
  _count: z.object({
    id: z.number(),
    action: z.number(),
    metadata: z.number(),
    entity: z.number(),
    entityId: z.number(),
    ipAddress: z.number(),
    userAgent: z.number(),
    createdAt: z.number(),
    tenantId: z.number(),
    userId: z.number(),
    tenant: z.number(),
    user: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    entity: z.string().nullable(),
    entityId: z.string().nullable(),
    ipAddress: z.string().nullable(),
    userAgent: z.string().nullable(),
    createdAt: z.date().nullable(),
    tenantId: z.string().nullable(),
    userId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    entity: z.string().nullable(),
    entityId: z.string().nullable(),
    ipAddress: z.string().nullable(),
    userAgent: z.string().nullable(),
    createdAt: z.date().nullable(),
    tenantId: z.string().nullable(),
    userId: z.string().nullable()
  }).nullable().optional()
}));