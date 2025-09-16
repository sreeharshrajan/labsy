import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumSubscriptionPlanWithAggregatesFilterObjectSchema } from './EnumSubscriptionPlanWithAggregatesFilter.schema';
import { SubscriptionPlanSchema } from '../enums/SubscriptionPlan.schema';
import { EnumSubscriptionStatusWithAggregatesFilterObjectSchema } from './EnumSubscriptionStatusWithAggregatesFilter.schema';
import { SubscriptionStatusSchema } from '../enums/SubscriptionStatus.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const subscriptionscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => SubscriptionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SubscriptionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SubscriptionScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SubscriptionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SubscriptionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  plan: z.union([z.lazy(() => EnumSubscriptionPlanWithAggregatesFilterObjectSchema), SubscriptionPlanSchema]).optional(),
  status: z.union([z.lazy(() => EnumSubscriptionStatusWithAggregatesFilterObjectSchema), SubscriptionStatusSchema]).optional(),
  startDate: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  endDate: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  renewalDate: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  stripeId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  tenantId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const SubscriptionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.SubscriptionScalarWhereWithAggregatesInput> = subscriptionscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.SubscriptionScalarWhereWithAggregatesInput>;
export const SubscriptionScalarWhereWithAggregatesInputObjectZodSchema = subscriptionscalarwherewithaggregatesinputSchema;
