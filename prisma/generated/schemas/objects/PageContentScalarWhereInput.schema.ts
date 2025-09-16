import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { JsonFilterObjectSchema } from './JsonFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const pagecontentscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PageContentScalarWhereInputObjectSchema), z.lazy(() => PageContentScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PageContentScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PageContentScalarWhereInputObjectSchema), z.lazy(() => PageContentScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  section: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  content: z.lazy(() => JsonFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  pageId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const PageContentScalarWhereInputObjectSchema: z.ZodType<Prisma.PageContentScalarWhereInput> = pagecontentscalarwhereinputSchema as unknown as z.ZodType<Prisma.PageContentScalarWhereInput>;
export const PageContentScalarWhereInputObjectZodSchema = pagecontentscalarwhereinputSchema;
