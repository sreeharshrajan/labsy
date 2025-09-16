import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const appsettingscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => AppSettingScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AppSettingScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AppSettingScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AppSettingScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AppSettingScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  key: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  value: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const AppSettingScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AppSettingScalarWhereWithAggregatesInput> = appsettingscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AppSettingScalarWhereWithAggregatesInput>;
export const AppSettingScalarWhereWithAggregatesInputObjectZodSchema = appsettingscalarwherewithaggregatesinputSchema;
