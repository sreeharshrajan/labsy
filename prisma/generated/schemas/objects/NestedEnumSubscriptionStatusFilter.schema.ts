import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubscriptionStatusSchema } from '../enums/SubscriptionStatus.schema'

const nestedenumsubscriptionstatusfilterSchema = z.object({
  equals: SubscriptionStatusSchema.optional(),
  in: SubscriptionStatusSchema.array().optional(),
  notIn: SubscriptionStatusSchema.array().optional(),
  not: z.union([SubscriptionStatusSchema, z.lazy(() => NestedEnumSubscriptionStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumSubscriptionStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumSubscriptionStatusFilter> = nestedenumsubscriptionstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumSubscriptionStatusFilter>;
export const NestedEnumSubscriptionStatusFilterObjectZodSchema = nestedenumsubscriptionstatusfilterSchema;
