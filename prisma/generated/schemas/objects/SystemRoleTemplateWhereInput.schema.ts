import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumRoleFilterObjectSchema } from './EnumRoleFilter.schema';
import { RoleSchema } from '../enums/Role.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { TenantRoleListRelationFilterObjectSchema } from './TenantRoleListRelationFilter.schema';
import { SystemPermissionListRelationFilterObjectSchema } from './SystemPermissionListRelationFilter.schema'

const systemroletemplatewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SystemRoleTemplateWhereInputObjectSchema), z.lazy(() => SystemRoleTemplateWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SystemRoleTemplateWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SystemRoleTemplateWhereInputObjectSchema), z.lazy(() => SystemRoleTemplateWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  role: z.union([z.lazy(() => EnumRoleFilterObjectSchema), RoleSchema]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  isDefault: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  tenantRoles: z.lazy(() => TenantRoleListRelationFilterObjectSchema).optional(),
  permissions: z.lazy(() => SystemPermissionListRelationFilterObjectSchema).optional()
}).strict();
export const SystemRoleTemplateWhereInputObjectSchema: z.ZodType<Prisma.SystemRoleTemplateWhereInput> = systemroletemplatewhereinputSchema as unknown as z.ZodType<Prisma.SystemRoleTemplateWhereInput>;
export const SystemRoleTemplateWhereInputObjectZodSchema = systemroletemplatewhereinputSchema;
