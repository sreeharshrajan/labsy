import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageWhereInputObjectSchema } from './PageWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => PageWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => PageWhereInputObjectSchema).optional().nullable()
}).strict();
export const PageNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.PageNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.PageNullableScalarRelationFilter>;
export const PageNullableScalarRelationFilterObjectZodSchema = makeSchema();
