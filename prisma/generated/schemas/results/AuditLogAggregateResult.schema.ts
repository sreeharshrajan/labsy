import { z } from 'zod';
export const AuditLogAggregateResultSchema = z.object({  _count: z.object({
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
  }).nullable().optional()});