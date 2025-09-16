import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserTitleSchema } from '../enums/UserTitle.schema'

const nestedenumusertitlefilterSchema = z.object({
  equals: UserTitleSchema.optional(),
  in: UserTitleSchema.array().optional(),
  notIn: UserTitleSchema.array().optional(),
  not: z.union([UserTitleSchema, z.lazy(() => NestedEnumUserTitleFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumUserTitleFilterObjectSchema: z.ZodType<Prisma.NestedEnumUserTitleFilter> = nestedenumusertitlefilterSchema as unknown as z.ZodType<Prisma.NestedEnumUserTitleFilter>;
export const NestedEnumUserTitleFilterObjectZodSchema = nestedenumusertitlefilterSchema;
