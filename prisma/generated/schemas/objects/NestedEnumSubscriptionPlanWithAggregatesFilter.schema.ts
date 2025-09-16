import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubscriptionPlanSchema } from '../enums/SubscriptionPlan.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumSubscriptionPlanFilterObjectSchema } from './NestedEnumSubscriptionPlanFilter.schema'

const nestedenumsubscriptionplanwithaggregatesfilterSchema = z.object({
  equals: SubscriptionPlanSchema.optional(),
  in: SubscriptionPlanSchema.array().optional(),
  notIn: SubscriptionPlanSchema.array().optional(),
  not: z.union([SubscriptionPlanSchema, z.lazy(() => NestedEnumSubscriptionPlanWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumSubscriptionPlanFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumSubscriptionPlanFilterObjectSchema).optional()
}).strict();
export const NestedEnumSubscriptionPlanWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumSubscriptionPlanWithAggregatesFilter> = nestedenumsubscriptionplanwithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumSubscriptionPlanWithAggregatesFilter>;
export const NestedEnumSubscriptionPlanWithAggregatesFilterObjectZodSchema = nestedenumsubscriptionplanwithaggregatesfilterSchema;
