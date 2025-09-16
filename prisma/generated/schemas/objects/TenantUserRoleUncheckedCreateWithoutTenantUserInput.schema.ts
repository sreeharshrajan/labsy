import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  roleId: z.string()
}).strict();
export const TenantUserRoleUncheckedCreateWithoutTenantUserInputObjectSchema: z.ZodType<Prisma.TenantUserRoleUncheckedCreateWithoutTenantUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserRoleUncheckedCreateWithoutTenantUserInput>;
export const TenantUserRoleUncheckedCreateWithoutTenantUserInputObjectZodSchema = makeSchema();
