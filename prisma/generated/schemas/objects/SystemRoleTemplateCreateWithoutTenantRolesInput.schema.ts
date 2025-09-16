import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { SystemPermissionCreateNestedManyWithoutRoleTemplateInputObjectSchema } from './SystemPermissionCreateNestedManyWithoutRoleTemplateInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  role: RoleSchema.optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  isDefault: z.boolean().optional(),
  permissions: z.lazy(() => SystemPermissionCreateNestedManyWithoutRoleTemplateInputObjectSchema).optional()
}).strict();
export const SystemRoleTemplateCreateWithoutTenantRolesInputObjectSchema: z.ZodType<Prisma.SystemRoleTemplateCreateWithoutTenantRolesInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemRoleTemplateCreateWithoutTenantRolesInput>;
export const SystemRoleTemplateCreateWithoutTenantRolesInputObjectZodSchema = makeSchema();
