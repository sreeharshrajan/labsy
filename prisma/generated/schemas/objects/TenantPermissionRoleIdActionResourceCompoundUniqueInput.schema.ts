import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  roleId: z.string(),
  action: z.string(),
  resource: z.string()
}).strict();
export const TenantPermissionRoleIdActionResourceCompoundUniqueInputObjectSchema: z.ZodType<Prisma.TenantPermissionRoleIdActionResourceCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantPermissionRoleIdActionResourceCompoundUniqueInput>;
export const TenantPermissionRoleIdActionResourceCompoundUniqueInputObjectZodSchema = makeSchema();
