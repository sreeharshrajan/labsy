import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { TenantRoleCreateNestedManyWithoutSystemRoleTemplateInputObjectSchema } from './TenantRoleCreateNestedManyWithoutSystemRoleTemplateInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  role: RoleSchema.optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  isDefault: z.boolean().optional(),
  tenantRoles: z.lazy(() => TenantRoleCreateNestedManyWithoutSystemRoleTemplateInputObjectSchema).optional()
}).strict();
export const SystemRoleTemplateCreateWithoutPermissionsInputObjectSchema: z.ZodType<Prisma.SystemRoleTemplateCreateWithoutPermissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemRoleTemplateCreateWithoutPermissionsInput>;
export const SystemRoleTemplateCreateWithoutPermissionsInputObjectZodSchema = makeSchema();
