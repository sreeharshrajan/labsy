import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema';
import { NestedEnumPaymentStatusWithAggregatesFilterObjectSchema } from './NestedEnumPaymentStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumPaymentStatusFilterObjectSchema } from './NestedEnumPaymentStatusFilter.schema'

const makeSchema = () => z.object({
  equals: PaymentStatusSchema.optional(),
  in: PaymentStatusSchema.array().optional(),
  notIn: PaymentStatusSchema.array().optional(),
  not: z.union([PaymentStatusSchema, z.lazy(() => NestedEnumPaymentStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumPaymentStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumPaymentStatusFilterObjectSchema).optional()
}).strict();
export const EnumPaymentStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumPaymentStatusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumPaymentStatusWithAggregatesFilter>;
export const EnumPaymentStatusWithAggregatesFilterObjectZodSchema = makeSchema();
