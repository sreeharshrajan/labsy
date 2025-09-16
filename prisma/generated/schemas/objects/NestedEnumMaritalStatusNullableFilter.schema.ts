import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MaritalStatusSchema } from '../enums/MaritalStatus.schema'

const nestedenummaritalstatusnullablefilterSchema = z.object({
  equals: MaritalStatusSchema.optional().nullable(),
  in: MaritalStatusSchema.array().optional().nullable(),
  notIn: MaritalStatusSchema.array().optional().nullable(),
  not: z.union([MaritalStatusSchema, z.lazy(() => NestedEnumMaritalStatusNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedEnumMaritalStatusNullableFilterObjectSchema: z.ZodType<Prisma.NestedEnumMaritalStatusNullableFilter> = nestedenummaritalstatusnullablefilterSchema as unknown as z.ZodType<Prisma.NestedEnumMaritalStatusNullableFilter>;
export const NestedEnumMaritalStatusNullableFilterObjectZodSchema = nestedenummaritalstatusnullablefilterSchema;
