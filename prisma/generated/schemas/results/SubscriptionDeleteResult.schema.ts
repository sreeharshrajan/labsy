import { z } from 'zod';
export const SubscriptionDeleteResultSchema = z.nullable(z.object({
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
}));