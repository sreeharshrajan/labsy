import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  tenantUserId: z.string()
}).strict();
export const TenantUserRoleUncheckedCreateWithoutRoleInputObjectSchema: z.ZodType<Prisma.TenantUserRoleUncheckedCreateWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserRoleUncheckedCreateWithoutRoleInput>;
export const TenantUserRoleUncheckedCreateWithoutRoleInputObjectZodSchema = makeSchema();
