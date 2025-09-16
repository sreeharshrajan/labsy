import { z } from 'zod';
export const SyncLogAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    tenantId: z.number(),
    entity: z.number(),
    entityId: z.number(),
    details: z.number(),
    status: z.number(),
    operation: z.number(),
    syncedAt: z.number(),
    startedAt: z.number(),
    tenant: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    tenantId: z.string().nullable(),
    entity: z.string().nullable(),
    entityId: z.string().nullable(),
    syncedAt: z.date().nullable(),
    startedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    tenantId: z.string().nullable(),
    entity: z.string().nullable(),
    entityId: z.string().nullable(),
    syncedAt: z.date().nullable(),
    startedAt: z.date().nullable()
  }).nullable().optional()});