import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubscriptionPlanSchema } from '../enums/SubscriptionPlan.schema';
import { NestedEnumSubscriptionPlanFilterObjectSchema } from './NestedEnumSubscriptionPlanFilter.schema'

const makeSchema = () => z.object({
  equals: SubscriptionPlanSchema.optional(),
  in: SubscriptionPlanSchema.array().optional(),
  notIn: SubscriptionPlanSchema.array().optional(),
  not: z.union([SubscriptionPlanSchema, z.lazy(() => NestedEnumSubscriptionPlanFilterObjectSchema)]).optional()
}).strict();
export const EnumSubscriptionPlanFilterObjectSchema: z.ZodType<Prisma.EnumSubscriptionPlanFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumSubscriptionPlanFilter>;
export const EnumSubscriptionPlanFilterObjectZodSchema = makeSchema();
