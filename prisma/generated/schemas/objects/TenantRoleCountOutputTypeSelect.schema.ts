import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  permissions: z.boolean().optional(),
  TenantUserRole: z.boolean().optional()
}).strict();
export const TenantRoleCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TenantRoleCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleCountOutputTypeSelect>;
export const TenantRoleCountOutputTypeSelectObjectZodSchema = makeSchema();
