import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserTitleSchema } from '../enums/UserTitle.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumUserTitleFilterObjectSchema } from './NestedEnumUserTitleFilter.schema'

const nestedenumusertitlewithaggregatesfilterSchema = z.object({
  equals: UserTitleSchema.optional(),
  in: UserTitleSchema.array().optional(),
  notIn: UserTitleSchema.array().optional(),
  not: z.union([UserTitleSchema, z.lazy(() => NestedEnumUserTitleWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumUserTitleFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumUserTitleFilterObjectSchema).optional()
}).strict();
export const NestedEnumUserTitleWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumUserTitleWithAggregatesFilter> = nestedenumusertitlewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumUserTitleWithAggregatesFilter>;
export const NestedEnumUserTitleWithAggregatesFilterObjectZodSchema = nestedenumusertitlewithaggregatesfilterSchema;
