import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BloodGroupSchema } from '../enums/BloodGroup.schema'

const nestedenumbloodgroupnullablefilterSchema = z.object({
  equals: BloodGroupSchema.optional().nullable(),
  in: BloodGroupSchema.array().optional().nullable(),
  notIn: BloodGroupSchema.array().optional().nullable(),
  not: z.union([BloodGroupSchema, z.lazy(() => NestedEnumBloodGroupNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedEnumBloodGroupNullableFilterObjectSchema: z.ZodType<Prisma.NestedEnumBloodGroupNullableFilter> = nestedenumbloodgroupnullablefilterSchema as unknown as z.ZodType<Prisma.NestedEnumBloodGroupNullableFilter>;
export const NestedEnumBloodGroupNullableFilterObjectZodSchema = nestedenumbloodgroupnullablefilterSchema;
