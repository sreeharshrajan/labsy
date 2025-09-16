import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema'

const tenantpermissionscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TenantPermissionScalarWhereInputObjectSchema), z.lazy(() => TenantPermissionScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TenantPermissionScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TenantPermissionScalarWhereInputObjectSchema), z.lazy(() => TenantPermissionScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  action: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  resource: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  roleId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const TenantPermissionScalarWhereInputObjectSchema: z.ZodType<Prisma.TenantPermissionScalarWhereInput> = tenantpermissionscalarwhereinputSchema as unknown as z.ZodType<Prisma.TenantPermissionScalarWhereInput>;
export const TenantPermissionScalarWhereInputObjectZodSchema = tenantpermissionscalarwhereinputSchema;
