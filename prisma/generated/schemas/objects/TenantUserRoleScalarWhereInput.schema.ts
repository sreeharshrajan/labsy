import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const tenantuserrolescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TenantUserRoleScalarWhereInputObjectSchema), z.lazy(() => TenantUserRoleScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TenantUserRoleScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TenantUserRoleScalarWhereInputObjectSchema), z.lazy(() => TenantUserRoleScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  tenantUserId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  roleId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const TenantUserRoleScalarWhereInputObjectSchema: z.ZodType<Prisma.TenantUserRoleScalarWhereInput> = tenantuserrolescalarwhereinputSchema as unknown as z.ZodType<Prisma.TenantUserRoleScalarWhereInput>;
export const TenantUserRoleScalarWhereInputObjectZodSchema = tenantuserrolescalarwhereinputSchema;
