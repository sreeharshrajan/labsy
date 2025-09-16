import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { TenantPermissionListRelationFilterObjectSchema } from './TenantPermissionListRelationFilter.schema';
import { SystemRoleTemplateNullableScalarRelationFilterObjectSchema } from './SystemRoleTemplateNullableScalarRelationFilter.schema';
import { SystemRoleTemplateWhereInputObjectSchema } from './SystemRoleTemplateWhereInput.schema';
import { TenantScalarRelationFilterObjectSchema } from './TenantScalarRelationFilter.schema';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { TenantUserRoleListRelationFilterObjectSchema } from './TenantUserRoleListRelationFilter.schema'

const tenantrolewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TenantRoleWhereInputObjectSchema), z.lazy(() => TenantRoleWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TenantRoleWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TenantRoleWhereInputObjectSchema), z.lazy(() => TenantRoleWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  isSystem: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  systemRoleTemplateId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  tenantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  permissions: z.lazy(() => TenantPermissionListRelationFilterObjectSchema).optional(),
  systemRoleTemplate: z.union([z.lazy(() => SystemRoleTemplateNullableScalarRelationFilterObjectSchema), z.lazy(() => SystemRoleTemplateWhereInputObjectSchema)]).optional(),
  tenant: z.union([z.lazy(() => TenantScalarRelationFilterObjectSchema), z.lazy(() => TenantWhereInputObjectSchema)]).optional(),
  TenantUserRole: z.lazy(() => TenantUserRoleListRelationFilterObjectSchema).optional()
}).strict();
export const TenantRoleWhereInputObjectSchema: z.ZodType<Prisma.TenantRoleWhereInput> = tenantrolewhereinputSchema as unknown as z.ZodType<Prisma.TenantRoleWhereInput>;
export const TenantRoleWhereInputObjectZodSchema = tenantrolewhereinputSchema;
