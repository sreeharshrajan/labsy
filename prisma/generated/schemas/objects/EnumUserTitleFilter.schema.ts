import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserTitleSchema } from '../enums/UserTitle.schema';
import { NestedEnumUserTitleFilterObjectSchema } from './NestedEnumUserTitleFilter.schema'

const makeSchema = () => z.object({
  equals: UserTitleSchema.optional(),
  in: UserTitleSchema.array().optional(),
  notIn: UserTitleSchema.array().optional(),
  not: z.union([UserTitleSchema, z.lazy(() => NestedEnumUserTitleFilterObjectSchema)]).optional()
}).strict();
export const EnumUserTitleFilterObjectSchema: z.ZodType<Prisma.EnumUserTitleFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumUserTitleFilter>;
export const EnumUserTitleFilterObjectZodSchema = makeSchema();
