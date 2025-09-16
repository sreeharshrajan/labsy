import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerTypeSchema } from '../enums/CustomerType.schema';
import { NestedEnumCustomerTypeNullableWithAggregatesFilterObjectSchema } from './NestedEnumCustomerTypeNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumCustomerTypeNullableFilterObjectSchema } from './NestedEnumCustomerTypeNullableFilter.schema'

const makeSchema = () => z.object({
  equals: CustomerTypeSchema.optional().nullable(),
  in: CustomerTypeSchema.array().optional().nullable(),
  notIn: CustomerTypeSchema.array().optional().nullable(),
  not: z.union([CustomerTypeSchema, z.lazy(() => NestedEnumCustomerTypeNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumCustomerTypeNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumCustomerTypeNullableFilterObjectSchema).optional()
}).strict();
export const EnumCustomerTypeNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumCustomerTypeNullableWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumCustomerTypeNullableWithAggregatesFilter>;
export const EnumCustomerTypeNullableWithAggregatesFilterObjectZodSchema = makeSchema();
