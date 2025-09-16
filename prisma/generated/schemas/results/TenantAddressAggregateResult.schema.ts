import { z } from 'zod';
export const TenantAddressAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    tenantId: z.number(),
    addressId: z.number(),
    isPrimary: z.number(),
    createdAt: z.number(),
    tenant: z.number(),
    address: z.number(),
    Report: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    tenantId: z.string().nullable(),
    addressId: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    tenantId: z.string().nullable(),
    addressId: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()});