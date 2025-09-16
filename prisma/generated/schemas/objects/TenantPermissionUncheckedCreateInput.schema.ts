import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  action: z.string(),
  resource: z.string(),
  roleId: z.string()
}).strict();
export const TenantPermissionUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TenantPermissionUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantPermissionUncheckedCreateInput>;
export const TenantPermissionUncheckedCreateInputObjectZodSchema = makeSchema();
