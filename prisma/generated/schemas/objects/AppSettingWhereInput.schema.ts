import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { AppSettingValueListRelationFilterObjectSchema } from './AppSettingValueListRelationFilter.schema'

const appsettingwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AppSettingWhereInputObjectSchema), z.lazy(() => AppSettingWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AppSettingWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AppSettingWhereInputObjectSchema), z.lazy(() => AppSettingWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  key: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  value: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  values: z.lazy(() => AppSettingValueListRelationFilterObjectSchema).optional()
}).strict();
export const AppSettingWhereInputObjectSchema: z.ZodType<Prisma.AppSettingWhereInput> = appsettingwhereinputSchema as unknown as z.ZodType<Prisma.AppSettingWhereInput>;
export const AppSettingWhereInputObjectZodSchema = appsettingwhereinputSchema;
