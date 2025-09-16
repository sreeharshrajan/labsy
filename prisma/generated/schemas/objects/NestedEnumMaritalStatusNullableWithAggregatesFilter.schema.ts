import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MaritalStatusSchema } from '../enums/MaritalStatus.schema';
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumMaritalStatusNullableFilterObjectSchema } from './NestedEnumMaritalStatusNullableFilter.schema'

const nestedenummaritalstatusnullablewithaggregatesfilterSchema = z.object({
  equals: MaritalStatusSchema.optional().nullable(),
  in: MaritalStatusSchema.array().optional().nullable(),
  notIn: MaritalStatusSchema.array().optional().nullable(),
  not: z.union([MaritalStatusSchema, z.lazy(() => NestedEnumMaritalStatusNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumMaritalStatusNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumMaritalStatusNullableFilterObjectSchema).optional()
}).strict();
export const NestedEnumMaritalStatusNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumMaritalStatusNullableWithAggregatesFilter> = nestedenummaritalstatusnullablewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumMaritalStatusNullableWithAggregatesFilter>;
export const NestedEnumMaritalStatusNullableWithAggregatesFilterObjectZodSchema = nestedenummaritalstatusnullablewithaggregatesfilterSchema;
