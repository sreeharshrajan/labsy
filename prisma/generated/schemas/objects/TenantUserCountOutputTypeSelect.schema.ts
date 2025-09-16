import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tenantRoles: z.boolean().optional(),
  Report: z.boolean().optional(),
  reportUpdates: z.boolean().optional(),
  collectedBy: z.boolean().optional()
}).strict();
export const TenantUserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TenantUserCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserCountOutputTypeSelect>;
export const TenantUserCountOutputTypeSelectObjectZodSchema = makeSchema();
