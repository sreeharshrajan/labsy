import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  action: z.string(),
  resource: z.string()
}).strict();
export const TenantPermissionUncheckedCreateWithoutRoleInputObjectSchema: z.ZodType<Prisma.TenantPermissionUncheckedCreateWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantPermissionUncheckedCreateWithoutRoleInput>;
export const TenantPermissionUncheckedCreateWithoutRoleInputObjectZodSchema = makeSchema();
