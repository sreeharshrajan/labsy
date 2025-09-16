import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  tenantUserId: z.string()
}).strict();
export const TenantUserRoleCreateManyRoleInputObjectSchema: z.ZodType<Prisma.TenantUserRoleCreateManyRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserRoleCreateManyRoleInput>;
export const TenantUserRoleCreateManyRoleInputObjectZodSchema = makeSchema();
