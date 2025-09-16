import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { TenantUserScalarRelationFilterObjectSchema } from './TenantUserScalarRelationFilter.schema';
import { TenantUserWhereInputObjectSchema } from './TenantUserWhereInput.schema';
import { TenantRoleScalarRelationFilterObjectSchema } from './TenantRoleScalarRelationFilter.schema';
import { TenantRoleWhereInputObjectSchema } from './TenantRoleWhereInput.schema'

const tenantuserrolewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TenantUserRoleWhereInputObjectSchema), z.lazy(() => TenantUserRoleWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TenantUserRoleWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TenantUserRoleWhereInputObjectSchema), z.lazy(() => TenantUserRoleWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  tenantUserId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  roleId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tenantUser: z.union([z.lazy(() => TenantUserScalarRelationFilterObjectSchema), z.lazy(() => TenantUserWhereInputObjectSchema)]).optional(),
  role: z.union([z.lazy(() => TenantRoleScalarRelationFilterObjectSchema), z.lazy(() => TenantRoleWhereInputObjectSchema)]).optional()
}).strict();
export const TenantUserRoleWhereInputObjectSchema: z.ZodType<Prisma.TenantUserRoleWhereInput> = tenantuserrolewhereinputSchema as unknown as z.ZodType<Prisma.TenantUserRoleWhereInput>;
export const TenantUserRoleWhereInputObjectZodSchema = tenantuserrolewhereinputSchema;
