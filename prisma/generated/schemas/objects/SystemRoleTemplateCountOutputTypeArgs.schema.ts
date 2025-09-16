import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SystemRoleTemplateCountOutputTypeSelectObjectSchema } from './SystemRoleTemplateCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SystemRoleTemplateCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const SystemRoleTemplateCountOutputTypeArgsObjectSchema = makeSchema();
export const SystemRoleTemplateCountOutputTypeArgsObjectZodSchema = makeSchema();
