import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { JsonNullableWithAggregatesFilterObjectSchema } from './JsonNullableWithAggregatesFilter.schema'

const systempermissionscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => SystemPermissionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SystemPermissionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SystemPermissionScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SystemPermissionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SystemPermissionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  action: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  resource: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  conditions: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  roleTemplateId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const SystemPermissionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.SystemPermissionScalarWhereWithAggregatesInput> = systempermissionscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.SystemPermissionScalarWhereWithAggregatesInput>;
export const SystemPermissionScalarWhereWithAggregatesInputObjectZodSchema = systempermissionscalarwherewithaggregatesinputSchema;
