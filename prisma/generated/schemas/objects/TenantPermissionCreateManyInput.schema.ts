import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  action: z.string(),
  resource: z.string(),
  roleId: z.string()
}).strict();
export const TenantPermissionCreateManyInputObjectSchema: z.ZodType<Prisma.TenantPermissionCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantPermissionCreateManyInput>;
export const TenantPermissionCreateManyInputObjectZodSchema = makeSchema();
