import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { JsonNullableWithAggregatesFilterObjectSchema } from './JsonNullableWithAggregatesFilter.schema';
import { JsonWithAggregatesFilterObjectSchema } from './JsonWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const postscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => PostScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PostScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PostScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PostScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PostScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  slug: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  metaData: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  content: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
  isActive: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const PostScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.PostScalarWhereWithAggregatesInput> = postscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.PostScalarWhereWithAggregatesInput>;
export const PostScalarWhereWithAggregatesInputObjectZodSchema = postscalarwherewithaggregatesinputSchema;
