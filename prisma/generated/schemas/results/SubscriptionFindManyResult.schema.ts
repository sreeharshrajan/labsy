import { z } from 'zod';
export const SubscriptionFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  plan: z.unknown(),
  status: z.unknown(),
  startDate: z.date(),
  endDate: z.date().optional(),
  renewalDate: z.date().optional(),
  createdAt: z.date(),
  stripeId: z.string().optional(),
  tenantId: z.string(),
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