import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserTitleSchema } from '../enums/UserTitle.schema'

const nestedenumusertitlenullablefilterSchema = z.object({
  equals: UserTitleSchema.optional().nullable(),
  in: UserTitleSchema.array().optional().nullable(),
  notIn: UserTitleSchema.array().optional().nullable(),
  not: z.union([UserTitleSchema, z.lazy(() => NestedEnumUserTitleNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedEnumUserTitleNullableFilterObjectSchema: z.ZodType<Prisma.NestedEnumUserTitleNullableFilter> = nestedenumusertitlenullablefilterSchema as unknown as z.ZodType<Prisma.NestedEnumUserTitleNullableFilter>;
export const NestedEnumUserTitleNullableFilterObjectZodSchema = nestedenumusertitlenullablefilterSchema;
