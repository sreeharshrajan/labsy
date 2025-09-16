import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubscriptionStatusSchema } from '../enums/SubscriptionStatus.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumSubscriptionStatusFilterObjectSchema } from './NestedEnumSubscriptionStatusFilter.schema'

const nestedenumsubscriptionstatuswithaggregatesfilterSchema = z.object({
  equals: SubscriptionStatusSchema.optional(),
  in: SubscriptionStatusSchema.array().optional(),
  notIn: SubscriptionStatusSchema.array().optional(),
  not: z.union([SubscriptionStatusSchema, z.lazy(() => NestedEnumSubscriptionStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumSubscriptionStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumSubscriptionStatusFilterObjectSchema).optional()
}).strict();
export const NestedEnumSubscriptionStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumSubscriptionStatusWithAggregatesFilter> = nestedenumsubscriptionstatuswithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumSubscriptionStatusWithAggregatesFilter>;
export const NestedEnumSubscriptionStatusWithAggregatesFilterObjectZodSchema = nestedenumsubscriptionstatuswithaggregatesfilterSchema;
