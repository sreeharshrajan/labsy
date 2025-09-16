import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { TenantRoleScalarRelationFilterObjectSchema } from './TenantRoleScalarRelationFilter.schema';
import { TenantRoleWhereInputObjectSchema } from './TenantRoleWhereInput.schema'

const tenantpermissionwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TenantPermissionWhereInputObjectSchema), z.lazy(() => TenantPermissionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TenantPermissionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TenantPermissionWhereInputObjectSchema), z.lazy(() => TenantPermissionWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  action: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  resource: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  roleId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  role: z.union([z.lazy(() => TenantRoleScalarRelationFilterObjectSchema), z.lazy(() => TenantRoleWhereInputObjectSchema)]).optional()
}).strict();
export const TenantPermissionWhereInputObjectSchema: z.ZodType<Prisma.TenantPermissionWhereInput> = tenantpermissionwhereinputSchema as unknown as z.ZodType<Prisma.TenantPermissionWhereInput>;
export const TenantPermissionWhereInputObjectZodSchema = tenantpermissionwhereinputSchema;
