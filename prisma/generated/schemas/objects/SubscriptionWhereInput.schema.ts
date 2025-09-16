import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumSubscriptionPlanFilterObjectSchema } from './EnumSubscriptionPlanFilter.schema';
import { SubscriptionPlanSchema } from '../enums/SubscriptionPlan.schema';
import { EnumSubscriptionStatusFilterObjectSchema } from './EnumSubscriptionStatusFilter.schema';
import { SubscriptionStatusSchema } from '../enums/SubscriptionStatus.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { TenantScalarRelationFilterObjectSchema } from './TenantScalarRelationFilter.schema';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema'

const subscriptionwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SubscriptionWhereInputObjectSchema), z.lazy(() => SubscriptionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SubscriptionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SubscriptionWhereInputObjectSchema), z.lazy(() => SubscriptionWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  plan: z.union([z.lazy(() => EnumSubscriptionPlanFilterObjectSchema), SubscriptionPlanSchema]).optional(),
  status: z.union([z.lazy(() => EnumSubscriptionStatusFilterObjectSchema), SubscriptionStatusSchema]).optional(),
  startDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  endDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  renewalDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  stripeId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  tenantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tenant: z.union([z.lazy(() => TenantScalarRelationFilterObjectSchema), z.lazy(() => TenantWhereInputObjectSchema)]).optional()
}).strict();
export const SubscriptionWhereInputObjectSchema: z.ZodType<Prisma.SubscriptionWhereInput> = subscriptionwhereinputSchema as unknown as z.ZodType<Prisma.SubscriptionWhereInput>;
export const SubscriptionWhereInputObjectZodSchema = subscriptionwhereinputSchema;
