import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserTitleSchema } from '../enums/UserTitle.schema';
import { NestedEnumUserTitleWithAggregatesFilterObjectSchema } from './NestedEnumUserTitleWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumUserTitleFilterObjectSchema } from './NestedEnumUserTitleFilter.schema'

const makeSchema = () => z.object({
  equals: UserTitleSchema.optional(),
  in: UserTitleSchema.array().optional(),
  notIn: UserTitleSchema.array().optional(),
  not: z.union([UserTitleSchema, z.lazy(() => NestedEnumUserTitleWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumUserTitleFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumUserTitleFilterObjectSchema).optional()
}).strict();
export const EnumUserTitleWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumUserTitleWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumUserTitleWithAggregatesFilter>;
export const EnumUserTitleWithAggregatesFilterObjectZodSchema = makeSchema();
