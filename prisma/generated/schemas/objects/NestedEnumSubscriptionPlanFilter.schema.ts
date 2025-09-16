import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubscriptionPlanSchema } from '../enums/SubscriptionPlan.schema'

const nestedenumsubscriptionplanfilterSchema = z.object({
  equals: SubscriptionPlanSchema.optional(),
  in: SubscriptionPlanSchema.array().optional(),
  notIn: SubscriptionPlanSchema.array().optional(),
  not: z.union([SubscriptionPlanSchema, z.lazy(() => NestedEnumSubscriptionPlanFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumSubscriptionPlanFilterObjectSchema: z.ZodType<Prisma.NestedEnumSubscriptionPlanFilter> = nestedenumsubscriptionplanfilterSchema as unknown as z.ZodType<Prisma.NestedEnumSubscriptionPlanFilter>;
export const NestedEnumSubscriptionPlanFilterObjectZodSchema = nestedenumsubscriptionplanfilterSchema;
