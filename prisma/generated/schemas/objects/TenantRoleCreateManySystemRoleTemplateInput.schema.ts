import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  isSystem: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tenantId: z.string()
}).strict();
export const TenantRoleCreateManySystemRoleTemplateInputObjectSchema: z.ZodType<Prisma.TenantRoleCreateManySystemRoleTemplateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleCreateManySystemRoleTemplateInput>;
export const TenantRoleCreateManySystemRoleTemplateInputObjectZodSchema = makeSchema();
