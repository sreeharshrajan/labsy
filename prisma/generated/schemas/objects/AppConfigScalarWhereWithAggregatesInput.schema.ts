import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const appconfigscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => AppConfigScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AppConfigScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AppConfigScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AppConfigScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AppConfigScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  appName: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  appVersion: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  appLogo: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  appIcon: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  appBanner: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  appDescription: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  appKeywords: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  appAuthor: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  appAuthorEmail: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  appAuthorUrl: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  appCopyright: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const AppConfigScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AppConfigScalarWhereWithAggregatesInput> = appconfigscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AppConfigScalarWhereWithAggregatesInput>;
export const AppConfigScalarWhereWithAggregatesInputObjectZodSchema = appconfigscalarwherewithaggregatesinputSchema;
