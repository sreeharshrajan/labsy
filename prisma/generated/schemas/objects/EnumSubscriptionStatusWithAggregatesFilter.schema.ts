import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubscriptionStatusSchema } from '../enums/SubscriptionStatus.schema';
import { NestedEnumSubscriptionStatusWithAggregatesFilterObjectSchema } from './NestedEnumSubscriptionStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumSubscriptionStatusFilterObjectSchema } from './NestedEnumSubscriptionStatusFilter.schema'

const makeSchema = () => z.object({
  equals: SubscriptionStatusSchema.optional(),
  in: SubscriptionStatusSchema.array().optional(),
  notIn: SubscriptionStatusSchema.array().optional(),
  not: z.union([SubscriptionStatusSchema, z.lazy(() => NestedEnumSubscriptionStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumSubscriptionStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumSubscriptionStatusFilterObjectSchema).optional()
}).strict();
export const EnumSubscriptionStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumSubscriptionStatusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumSubscriptionStatusWithAggregatesFilter>;
export const EnumSubscriptionStatusWithAggregatesFilterObjectZodSchema = makeSchema();
