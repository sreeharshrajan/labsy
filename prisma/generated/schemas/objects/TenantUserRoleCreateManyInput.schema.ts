import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  tenantUserId: z.string(),
  roleId: z.string()
}).strict();
export const TenantUserRoleCreateManyInputObjectSchema: z.ZodType<Prisma.TenantUserRoleCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserRoleCreateManyInput>;
export const TenantUserRoleCreateManyInputObjectZodSchema = makeSchema();
