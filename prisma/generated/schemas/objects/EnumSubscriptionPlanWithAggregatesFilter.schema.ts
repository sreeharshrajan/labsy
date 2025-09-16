import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubscriptionPlanSchema } from '../enums/SubscriptionPlan.schema';
import { NestedEnumSubscriptionPlanWithAggregatesFilterObjectSchema } from './NestedEnumSubscriptionPlanWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumSubscriptionPlanFilterObjectSchema } from './NestedEnumSubscriptionPlanFilter.schema'

const makeSchema = () => z.object({
  equals: SubscriptionPlanSchema.optional(),
  in: SubscriptionPlanSchema.array().optional(),
  notIn: SubscriptionPlanSchema.array().optional(),
  not: z.union([SubscriptionPlanSchema, z.lazy(() => NestedEnumSubscriptionPlanWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumSubscriptionPlanFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumSubscriptionPlanFilterObjectSchema).optional()
}).strict();
export const EnumSubscriptionPlanWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumSubscriptionPlanWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumSubscriptionPlanWithAggregatesFilter>;
export const EnumSubscriptionPlanWithAggregatesFilterObjectZodSchema = makeSchema();
