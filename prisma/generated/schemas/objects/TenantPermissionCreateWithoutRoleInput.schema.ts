import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  action: z.string(),
  resource: z.string()
}).strict();
export const TenantPermissionCreateWithoutRoleInputObjectSchema: z.ZodType<Prisma.TenantPermissionCreateWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantPermissionCreateWithoutRoleInput>;
export const TenantPermissionCreateWithoutRoleInputObjectZodSchema = makeSchema();
