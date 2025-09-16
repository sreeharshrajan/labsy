import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema'

const systempermissionscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SystemPermissionScalarWhereInputObjectSchema), z.lazy(() => SystemPermissionScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SystemPermissionScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SystemPermissionScalarWhereInputObjectSchema), z.lazy(() => SystemPermissionScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  action: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  resource: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  conditions: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  roleTemplateId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const SystemPermissionScalarWhereInputObjectSchema: z.ZodType<Prisma.SystemPermissionScalarWhereInput> = systempermissionscalarwhereinputSchema as unknown as z.ZodType<Prisma.SystemPermissionScalarWhereInput>;
export const SystemPermissionScalarWhereInputObjectZodSchema = systempermissionscalarwhereinputSchema;
