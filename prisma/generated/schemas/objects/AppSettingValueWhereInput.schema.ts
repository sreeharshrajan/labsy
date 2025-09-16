import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { AppSettingScalarRelationFilterObjectSchema } from './AppSettingScalarRelationFilter.schema';
import { AppSettingWhereInputObjectSchema } from './AppSettingWhereInput.schema'

const appsettingvaluewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AppSettingValueWhereInputObjectSchema), z.lazy(() => AppSettingValueWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AppSettingValueWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AppSettingValueWhereInputObjectSchema), z.lazy(() => AppSettingValueWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  settingId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  value: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  setting: z.union([z.lazy(() => AppSettingScalarRelationFilterObjectSchema), z.lazy(() => AppSettingWhereInputObjectSchema)]).optional()
}).strict();
export const AppSettingValueWhereInputObjectSchema: z.ZodType<Prisma.AppSettingValueWhereInput> = appsettingvaluewhereinputSchema as unknown as z.ZodType<Prisma.AppSettingValueWhereInput>;
export const AppSettingValueWhereInputObjectZodSchema = appsettingvaluewhereinputSchema;
