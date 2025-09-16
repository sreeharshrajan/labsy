import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { SubscriptionCountOrderByAggregateInputObjectSchema } from './SubscriptionCountOrderByAggregateInput.schema';
import { SubscriptionMaxOrderByAggregateInputObjectSchema } from './SubscriptionMaxOrderByAggregateInput.schema';
import { SubscriptionMinOrderByAggregateInputObjectSchema } from './SubscriptionMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  plan: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  startDate: SortOrderSchema.optional(),
  endDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  renewalDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  stripeId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tenantId: SortOrderSchema.optional(),
  _count: z.lazy(() => SubscriptionCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => SubscriptionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => SubscriptionMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const SubscriptionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.SubscriptionOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.SubscriptionOrderByWithAggregationInput>;
export const SubscriptionOrderByWithAggregationInputObjectZodSchema = makeSchema();
