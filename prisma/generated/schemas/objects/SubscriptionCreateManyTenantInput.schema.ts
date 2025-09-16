import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubscriptionPlanSchema } from '../enums/SubscriptionPlan.schema';
import { SubscriptionStatusSchema } from '../enums/SubscriptionStatus.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  plan: SubscriptionPlanSchema.optional(),
  status: SubscriptionStatusSchema.optional(),
  startDate: z.coerce.date().optional(),
  endDate: z.coerce.date().optional().nullable(),
  renewalDate: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  stripeId: z.string().optional().nullable()
}).strict();
export const SubscriptionCreateManyTenantInputObjectSchema: z.ZodType<Prisma.SubscriptionCreateManyTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.SubscriptionCreateManyTenantInput>;
export const SubscriptionCreateManyTenantInputObjectZodSchema = makeSchema();
