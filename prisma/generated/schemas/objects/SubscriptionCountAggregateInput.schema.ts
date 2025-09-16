import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  plan: z.literal(true).optional(),
  status: z.literal(true).optional(),
  startDate: z.literal(true).optional(),
  endDate: z.literal(true).optional(),
  renewalDate: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  stripeId: z.literal(true).optional(),
  tenantId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const SubscriptionCountAggregateInputObjectSchema: z.ZodType<Prisma.SubscriptionCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SubscriptionCountAggregateInputType>;
export const SubscriptionCountAggregateInputObjectZodSchema = makeSchema();
