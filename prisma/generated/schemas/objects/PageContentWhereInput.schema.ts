import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { JsonFilterObjectSchema } from './JsonFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { PageNullableScalarRelationFilterObjectSchema } from './PageNullableScalarRelationFilter.schema';
import { PageWhereInputObjectSchema } from './PageWhereInput.schema'

const pagecontentwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PageContentWhereInputObjectSchema), z.lazy(() => PageContentWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PageContentWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PageContentWhereInputObjectSchema), z.lazy(() => PageContentWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  section: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  content: z.lazy(() => JsonFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  pageId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  Page: z.union([z.lazy(() => PageNullableScalarRelationFilterObjectSchema), z.lazy(() => PageWhereInputObjectSchema)]).optional()
}).strict();
export const PageContentWhereInputObjectSchema: z.ZodType<Prisma.PageContentWhereInput> = pagecontentwhereinputSchema as unknown as z.ZodType<Prisma.PageContentWhereInput>;
export const PageContentWhereInputObjectZodSchema = pagecontentwhereinputSchema;
