import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const SubscriptionOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.SubscriptionOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SubscriptionOrderByRelationAggregateInput>;
export const SubscriptionOrderByRelationAggregateInputObjectZodSchema = makeSchema();
