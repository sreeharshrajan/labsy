import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PaymentTypeSchema } from '../enums/PaymentType.schema';
import { NestedEnumPaymentTypeWithAggregatesFilterObjectSchema } from './NestedEnumPaymentTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumPaymentTypeFilterObjectSchema } from './NestedEnumPaymentTypeFilter.schema'

const makeSchema = () => z.object({
  equals: PaymentTypeSchema.optional(),
  in: PaymentTypeSchema.array().optional(),
  notIn: PaymentTypeSchema.array().optional(),
  not: z.union([PaymentTypeSchema, z.lazy(() => NestedEnumPaymentTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumPaymentTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumPaymentTypeFilterObjectSchema).optional()
}).strict();
export const EnumPaymentTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumPaymentTypeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumPaymentTypeWithAggregatesFilter>;
export const EnumPaymentTypeWithAggregatesFilterObjectZodSchema = makeSchema();
