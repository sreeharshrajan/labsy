import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const appconfigwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AppConfigWhereInputObjectSchema), z.lazy(() => AppConfigWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AppConfigWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AppConfigWhereInputObjectSchema), z.lazy(() => AppConfigWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  appName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  appVersion: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  appLogo: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  appIcon: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  appBanner: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  appDescription: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  appKeywords: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  appAuthor: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  appAuthorEmail: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  appAuthorUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  appCopyright: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const AppConfigWhereInputObjectSchema: z.ZodType<Prisma.AppConfigWhereInput> = appconfigwhereinputSchema as unknown as z.ZodType<Prisma.AppConfigWhereInput>;
export const AppConfigWhereInputObjectZodSchema = appconfigwhereinputSchema;
