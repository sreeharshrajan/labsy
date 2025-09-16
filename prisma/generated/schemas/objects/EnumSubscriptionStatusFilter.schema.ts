import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubscriptionStatusSchema } from '../enums/SubscriptionStatus.schema';
import { NestedEnumSubscriptionStatusFilterObjectSchema } from './NestedEnumSubscriptionStatusFilter.schema'

const makeSchema = () => z.object({
  equals: SubscriptionStatusSchema.optional(),
  in: SubscriptionStatusSchema.array().optional(),
  notIn: SubscriptionStatusSchema.array().optional(),
  not: z.union([SubscriptionStatusSchema, z.lazy(() => NestedEnumSubscriptionStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumSubscriptionStatusFilterObjectSchema: z.ZodType<Prisma.EnumSubscriptionStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumSubscriptionStatusFilter>;
export const EnumSubscriptionStatusFilterObjectZodSchema = makeSchema();
