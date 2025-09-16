import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { SystemRoleTemplateScalarRelationFilterObjectSchema } from './SystemRoleTemplateScalarRelationFilter.schema';
import { SystemRoleTemplateWhereInputObjectSchema } from './SystemRoleTemplateWhereInput.schema'

const systempermissionwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SystemPermissionWhereInputObjectSchema), z.lazy(() => SystemPermissionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SystemPermissionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SystemPermissionWhereInputObjectSchema), z.lazy(() => SystemPermissionWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  action: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  resource: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  conditions: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  roleTemplateId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  roleTemplate: z.union([z.lazy(() => SystemRoleTemplateScalarRelationFilterObjectSchema), z.lazy(() => SystemRoleTemplateWhereInputObjectSchema)]).optional()
}).strict();
export const SystemPermissionWhereInputObjectSchema: z.ZodType<Prisma.SystemPermissionWhereInput> = systempermissionwhereinputSchema as unknown as z.ZodType<Prisma.SystemPermissionWhereInput>;
export const SystemPermissionWhereInputObjectZodSchema = systempermissionwhereinputSchema;
