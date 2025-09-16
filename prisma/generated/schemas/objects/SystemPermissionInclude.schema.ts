import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SystemRoleTemplateArgsObjectSchema } from './SystemRoleTemplateArgs.schema'

const makeSchema = () => z.object({
  roleTemplate: z.union([z.boolean(), z.lazy(() => SystemRoleTemplateArgsObjectSchema)]).optional()
}).strict();
export const SystemPermissionIncludeObjectSchema: z.ZodType<Prisma.SystemPermissionInclude> = makeSchema() as unknown as z.ZodType<Prisma.SystemPermissionInclude>;
export const SystemPermissionIncludeObjectZodSchema = makeSchema();
