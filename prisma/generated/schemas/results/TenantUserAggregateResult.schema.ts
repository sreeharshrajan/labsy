import { z } from 'zod';
export const TenantUserAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    deletedAt: z.number(),
    tenantRoles: z.number(),
    userId: z.number(),
    tenantId: z.number(),
    user: z.number(),
    tenant: z.number(),
    Report: z.number(),
    reportUpdates: z.number(),
    collectedBy: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable(),
    userId: z.string().nullable(),
    tenantId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable(),
    userId: z.string().nullable(),
    tenantId: z.string().nullable()
  }).nullable().optional()});