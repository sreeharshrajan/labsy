import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageContentWhereInputObjectSchema } from './PageContentWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => PageContentWhereInputObjectSchema).optional(),
  some: z.lazy(() => PageContentWhereInputObjectSchema).optional(),
  none: z.lazy(() => PageContentWhereInputObjectSchema).optional()
}).strict();
export const PageContentListRelationFilterObjectSchema: z.ZodType<Prisma.PageContentListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.PageContentListRelationFilter>;
export const PageContentListRelationFilterObjectZodSchema = makeSchema();
