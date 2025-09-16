import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SystemRoleTemplateArgsObjectSchema } from './SystemRoleTemplateArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  action: z.boolean().optional(),
  resource: z.boolean().optional(),
  conditions: z.boolean().optional(),
  roleTemplateId: z.boolean().optional(),
  roleTemplate: z.union([z.boolean(), z.lazy(() => SystemRoleTemplateArgsObjectSchema)]).optional()
}).strict();
export const SystemPermissionSelectObjectSchema: z.ZodType<Prisma.SystemPermissionSelect> = makeSchema() as unknown as z.ZodType<Prisma.SystemPermissionSelect>;
export const SystemPermissionSelectObjectZodSchema = makeSchema();
