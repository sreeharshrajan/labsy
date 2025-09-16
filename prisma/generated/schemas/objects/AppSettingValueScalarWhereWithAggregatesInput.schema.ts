import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const appsettingvaluescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => AppSettingValueScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AppSettingValueScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AppSettingValueScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AppSettingValueScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AppSettingValueScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  settingId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  value: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const AppSettingValueScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AppSettingValueScalarWhereWithAggregatesInput> = appsettingvaluescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AppSettingValueScalarWhereWithAggregatesInput>;
export const AppSettingValueScalarWhereWithAggregatesInputObjectZodSchema = appsettingvaluescalarwherewithaggregatesinputSchema;
