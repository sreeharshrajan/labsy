import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { TenantRoleCreateNestedManyWithoutSystemRoleTemplateInputObjectSchema } from './TenantRoleCreateNestedManyWithoutSystemRoleTemplateInput.schema';
import { SystemPermissionCreateNestedManyWithoutRoleTemplateInputObjectSchema } from './SystemPermissionCreateNestedManyWithoutRoleTemplateInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  role: RoleSchema.optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  isDefault: z.boolean().optional(),
  tenantRoles: z.lazy(() => TenantRoleCreateNestedManyWithoutSystemRoleTemplateInputObjectSchema),
  permissions: z.lazy(() => SystemPermissionCreateNestedManyWithoutRoleTemplateInputObjectSchema)
}).strict();
export const SystemRoleTemplateCreateInputObjectSchema: z.ZodType<Prisma.SystemRoleTemplateCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemRoleTemplateCreateInput>;
export const SystemRoleTemplateCreateInputObjectZodSchema = makeSchema();
