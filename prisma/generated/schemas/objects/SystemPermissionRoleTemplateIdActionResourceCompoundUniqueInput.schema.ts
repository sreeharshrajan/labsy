import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  roleTemplateId: z.string(),
  action: z.string(),
  resource: z.string()
}).strict();
export const SystemPermissionRoleTemplateIdActionResourceCompoundUniqueInputObjectSchema: z.ZodType<Prisma.SystemPermissionRoleTemplateIdActionResourceCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemPermissionRoleTemplateIdActionResourceCompoundUniqueInput>;
export const SystemPermissionRoleTemplateIdActionResourceCompoundUniqueInputObjectZodSchema = makeSchema();
