import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const appsettingvaluescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AppSettingValueScalarWhereInputObjectSchema), z.lazy(() => AppSettingValueScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AppSettingValueScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AppSettingValueScalarWhereInputObjectSchema), z.lazy(() => AppSettingValueScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  settingId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  value: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const AppSettingValueScalarWhereInputObjectSchema: z.ZodType<Prisma.AppSettingValueScalarWhereInput> = appsettingvaluescalarwhereinputSchema as unknown as z.ZodType<Prisma.AppSettingValueScalarWhereInput>;
export const AppSettingValueScalarWhereInputObjectZodSchema = appsettingvaluescalarwhereinputSchema;
