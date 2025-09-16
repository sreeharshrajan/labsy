import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MaritalStatusSchema } from '../enums/MaritalStatus.schema';
import { NestedEnumMaritalStatusNullableWithAggregatesFilterObjectSchema } from './NestedEnumMaritalStatusNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumMaritalStatusNullableFilterObjectSchema } from './NestedEnumMaritalStatusNullableFilter.schema'

const makeSchema = () => z.object({
  equals: MaritalStatusSchema.optional().nullable(),
  in: MaritalStatusSchema.array().optional().nullable(),
  notIn: MaritalStatusSchema.array().optional().nullable(),
  not: z.union([MaritalStatusSchema, z.lazy(() => NestedEnumMaritalStatusNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumMaritalStatusNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumMaritalStatusNullableFilterObjectSchema).optional()
}).strict();
export const EnumMaritalStatusNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumMaritalStatusNullableWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumMaritalStatusNullableWithAggregatesFilter>;
export const EnumMaritalStatusNullableWithAggregatesFilterObjectZodSchema = makeSchema();
