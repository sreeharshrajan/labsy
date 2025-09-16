import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tenantUserId: z.string(),
  roleId: z.string()
}).strict();
export const TenantUserRoleTenantUserIdRoleIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.TenantUserRoleTenantUserIdRoleIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserRoleTenantUserIdRoleIdCompoundUniqueInput>;
export const TenantUserRoleTenantUserIdRoleIdCompoundUniqueInputObjectZodSchema = makeSchema();
