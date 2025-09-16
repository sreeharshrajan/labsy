import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BloodGroupSchema } from '../enums/BloodGroup.schema';
import { NestedEnumBloodGroupNullableWithAggregatesFilterObjectSchema } from './NestedEnumBloodGroupNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumBloodGroupNullableFilterObjectSchema } from './NestedEnumBloodGroupNullableFilter.schema'

const makeSchema = () => z.object({
  equals: BloodGroupSchema.optional().nullable(),
  in: BloodGroupSchema.array().optional().nullable(),
  notIn: BloodGroupSchema.array().optional().nullable(),
  not: z.union([BloodGroupSchema, z.lazy(() => NestedEnumBloodGroupNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumBloodGroupNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumBloodGroupNullableFilterObjectSchema).optional()
}).strict();
export const EnumBloodGroupNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumBloodGroupNullableWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumBloodGroupNullableWithAggregatesFilter>;
export const EnumBloodGroupNullableWithAggregatesFilterObjectZodSchema = makeSchema();
