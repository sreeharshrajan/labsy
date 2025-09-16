import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  isSystem: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  systemRoleTemplateId: z.string().optional().nullable()
}).strict();
export const TenantRoleCreateManyTenantInputObjectSchema: z.ZodType<Prisma.TenantRoleCreateManyTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleCreateManyTenantInput>;
export const TenantRoleCreateManyTenantInputObjectZodSchema = makeSchema();
