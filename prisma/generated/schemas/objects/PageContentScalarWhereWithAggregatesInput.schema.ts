import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { JsonWithAggregatesFilterObjectSchema } from './JsonWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const pagecontentscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => PageContentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PageContentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PageContentScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PageContentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PageContentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  section: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  content: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  pageId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const PageContentScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.PageContentScalarWhereWithAggregatesInput> = pagecontentscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.PageContentScalarWhereWithAggregatesInput>;
export const PageContentScalarWhereWithAggregatesInputObjectZodSchema = pagecontentscalarwherewithaggregatesinputSchema;
