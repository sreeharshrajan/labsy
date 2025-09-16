import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserTitleSchema } from '../enums/UserTitle.schema';
import { NestedEnumUserTitleNullableFilterObjectSchema } from './NestedEnumUserTitleNullableFilter.schema'

const makeSchema = () => z.object({
  equals: UserTitleSchema.optional().nullable(),
  in: UserTitleSchema.array().optional().nullable(),
  notIn: UserTitleSchema.array().optional().nullable(),
  not: z.union([UserTitleSchema, z.lazy(() => NestedEnumUserTitleNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const EnumUserTitleNullableFilterObjectSchema: z.ZodType<Prisma.EnumUserTitleNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumUserTitleNullableFilter>;
export const EnumUserTitleNullableFilterObjectZodSchema = makeSchema();
