import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SystemRoleTemplateSelectObjectSchema } from './SystemRoleTemplateSelect.schema';
import { SystemRoleTemplateIncludeObjectSchema } from './SystemRoleTemplateInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SystemRoleTemplateSelectObjectSchema).optional(),
  include: z.lazy(() => SystemRoleTemplateIncludeObjectSchema).optional()
}).strict();
export const SystemRoleTemplateArgsObjectSchema = makeSchema();
export const SystemRoleTemplateArgsObjectZodSchema = makeSchema();
