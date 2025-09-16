import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserCreateNestedOneWithoutTenantRolesInputObjectSchema } from './TenantUserCreateNestedOneWithoutTenantRolesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  tenantUser: z.lazy(() => TenantUserCreateNestedOneWithoutTenantRolesInputObjectSchema)
}).strict();
export const TenantUserRoleCreateWithoutRoleInputObjectSchema: z.ZodType<Prisma.TenantUserRoleCreateWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserRoleCreateWithoutRoleInput>;
export const TenantUserRoleCreateWithoutRoleInputObjectZodSchema = makeSchema();
