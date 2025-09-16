import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  action: z.string(),
  resource: z.string()
}).strict();
export const TenantPermissionCreateManyRoleInputObjectSchema: z.ZodType<Prisma.TenantPermissionCreateManyRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantPermissionCreateManyRoleInput>;
export const TenantPermissionCreateManyRoleInputObjectZodSchema = makeSchema();
