import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  plan: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  startDate: SortOrderSchema.optional(),
  endDate: SortOrderSchema.optional(),
  renewalDate: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  stripeId: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional()
}).strict();
export const SubscriptionCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SubscriptionCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SubscriptionCountOrderByAggregateInput>;
export const SubscriptionCountOrderByAggregateInputObjectZodSchema = makeSchema();
