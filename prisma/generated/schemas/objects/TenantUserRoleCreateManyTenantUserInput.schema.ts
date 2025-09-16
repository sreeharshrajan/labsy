import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  roleId: z.string()
}).strict();
export const TenantUserRoleCreateManyTenantUserInputObjectSchema: z.ZodType<Prisma.TenantUserRoleCreateManyTenantUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserRoleCreateManyTenantUserInput>;
export const TenantUserRoleCreateManyTenantUserInputObjectZodSchema = makeSchema();
