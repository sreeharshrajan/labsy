import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserCreateNestedOneWithoutTenantRolesInputObjectSchema } from './TenantUserCreateNestedOneWithoutTenantRolesInput.schema';
import { TenantRoleCreateNestedOneWithoutTenantUserRoleInputObjectSchema } from './TenantRoleCreateNestedOneWithoutTenantUserRoleInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  tenantUser: z.lazy(() => TenantUserCreateNestedOneWithoutTenantRolesInputObjectSchema),
  role: z.lazy(() => TenantRoleCreateNestedOneWithoutTenantUserRoleInputObjectSchema)
}).strict();
export const TenantUserRoleCreateInputObjectSchema: z.ZodType<Prisma.TenantUserRoleCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserRoleCreateInput>;
export const TenantUserRoleCreateInputObjectZodSchema = makeSchema();
