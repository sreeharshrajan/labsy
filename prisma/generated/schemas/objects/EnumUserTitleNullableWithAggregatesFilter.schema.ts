import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserTitleSchema } from '../enums/UserTitle.schema';
import { NestedEnumUserTitleNullableWithAggregatesFilterObjectSchema } from './NestedEnumUserTitleNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumUserTitleNullableFilterObjectSchema } from './NestedEnumUserTitleNullableFilter.schema'

const makeSchema = () => z.object({
  equals: UserTitleSchema.optional().nullable(),
  in: UserTitleSchema.array().optional().nullable(),
  notIn: UserTitleSchema.array().optional().nullable(),
  not: z.union([UserTitleSchema, z.lazy(() => NestedEnumUserTitleNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumUserTitleNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumUserTitleNullableFilterObjectSchema).optional()
}).strict();
export const EnumUserTitleNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumUserTitleNullableWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumUserTitleNullableWithAggregatesFilter>;
export const EnumUserTitleNullableWithAggregatesFilterObjectZodSchema = makeSchema();
