import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MaritalStatusSchema } from '../enums/MaritalStatus.schema';
import { NestedEnumMaritalStatusNullableFilterObjectSchema } from './NestedEnumMaritalStatusNullableFilter.schema'

const makeSchema = () => z.object({
  equals: MaritalStatusSchema.optional().nullable(),
  in: MaritalStatusSchema.array().optional().nullable(),
  notIn: MaritalStatusSchema.array().optional().nullable(),
  not: z.union([MaritalStatusSchema, z.lazy(() => NestedEnumMaritalStatusNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const EnumMaritalStatusNullableFilterObjectSchema: z.ZodType<Prisma.EnumMaritalStatusNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumMaritalStatusNullableFilter>;
export const EnumMaritalStatusNullableFilterObjectZodSchema = makeSchema();
