import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BloodGroupSchema } from '../enums/BloodGroup.schema';
import { NestedEnumBloodGroupNullableFilterObjectSchema } from './NestedEnumBloodGroupNullableFilter.schema'

const makeSchema = () => z.object({
  equals: BloodGroupSchema.optional().nullable(),
  in: BloodGroupSchema.array().optional().nullable(),
  notIn: BloodGroupSchema.array().optional().nullable(),
  not: z.union([BloodGroupSchema, z.lazy(() => NestedEnumBloodGroupNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const EnumBloodGroupNullableFilterObjectSchema: z.ZodType<Prisma.EnumBloodGroupNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumBloodGroupNullableFilter>;
export const EnumBloodGroupNullableFilterObjectZodSchema = makeSchema();
