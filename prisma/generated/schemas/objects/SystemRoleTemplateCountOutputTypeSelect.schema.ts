import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tenantRoles: z.boolean().optional(),
  permissions: z.boolean().optional()
}).strict();
export const SystemRoleTemplateCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.SystemRoleTemplateCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.SystemRoleTemplateCountOutputTypeSelect>;
export const SystemRoleTemplateCountOutputTypeSelectObjectZodSchema = makeSchema();
