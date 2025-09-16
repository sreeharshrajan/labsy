import { z } from 'zod';
export const ServiceCategoryAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    deletedAt: z.number(),
    name: z.number(),
    slug: z.number(),
    tenantId: z.number(),
    tenant: z.number(),
    services: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable(),
    name: z.string().nullable(),
    slug: z.string().nullable(),
    tenantId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable(),
    name: z.string().nullable(),
    slug: z.string().nullable(),
    tenantId: z.string().nullable()
  }).nullable().optional()});