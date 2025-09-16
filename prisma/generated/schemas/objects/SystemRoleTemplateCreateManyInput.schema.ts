import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleSchema } from '../enums/Role.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  role: RoleSchema.optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  isDefault: z.boolean().optional()
}).strict();
export const SystemRoleTemplateCreateManyInputObjectSchema: z.ZodType<Prisma.SystemRoleTemplateCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemRoleTemplateCreateManyInput>;
export const SystemRoleTemplateCreateManyInputObjectZodSchema = makeSchema();
