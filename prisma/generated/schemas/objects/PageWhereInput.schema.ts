import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { JsonFilterObjectSchema } from './JsonFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { PageContentListRelationFilterObjectSchema } from './PageContentListRelationFilter.schema'

const pagewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PageWhereInputObjectSchema), z.lazy(() => PageWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PageWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PageWhereInputObjectSchema), z.lazy(() => PageWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  slug: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  content: z.lazy(() => JsonFilterObjectSchema).optional(),
  isActive: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  metaData: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  pageContents: z.lazy(() => PageContentListRelationFilterObjectSchema).optional()
}).strict();
export const PageWhereInputObjectSchema: z.ZodType<Prisma.PageWhereInput> = pagewhereinputSchema as unknown as z.ZodType<Prisma.PageWhereInput>;
export const PageWhereInputObjectZodSchema = pagewhereinputSchema;
