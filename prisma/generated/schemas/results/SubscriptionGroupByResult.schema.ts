import { z } from 'zod';
export const SubscriptionGroupByResultSchema = z.array(z.object({
  id: z.string(),
  startDate: z.date(),
  endDate: z.date(),
  renewalDate: z.date(),
  createdAt: z.date(),
  stripeId: z.string(),
  tenantId: z.string(),
  _count: z.object({
    id: z.number(),
    plan: z.number(),
    status: z.number(),
    startDate: z.number(),
    endDate: z.number(),
    renewalDate: z.number(),
    createdAt: z.number(),
    stripeId: z.number(),
    tenantId: z.number(),
    tenant: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    startDate: z.date().nullable(),
    endDate: z.date().nullable(),
    renewalDate: z.date().nullable(),
    createdAt: z.date().nullable(),
    stripeId: z.string().nullable(),
    tenantId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    startDate: z.date().nullable(),
    endDate: z.date().nullable(),
    renewalDate: z.date().nullable(),
    createdAt: z.date().nullable(),
    stripeId: z.string().nullable(),
    tenantId: z.string().nullable()
  }).nullable().optional()
}));