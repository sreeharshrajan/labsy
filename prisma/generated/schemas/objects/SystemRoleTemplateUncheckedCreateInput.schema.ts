import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { TenantRoleUncheckedCreateNestedManyWithoutSystemRoleTemplateInputObjectSchema } from './TenantRoleUncheckedCreateNestedManyWithoutSystemRoleTemplateInput.schema';
import { SystemPermissionUncheckedCreateNestedManyWithoutRoleTemplateInputObjectSchema } from './SystemPermissionUncheckedCreateNestedManyWithoutRoleTemplateInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  role: RoleSchema.optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  isDefault: z.boolean().optional(),
  tenantRoles: z.lazy(() => TenantRoleUncheckedCreateNestedManyWithoutSystemRoleTemplateInputObjectSchema),
  permissions: z.lazy(() => SystemPermissionUncheckedCreateNestedManyWithoutRoleTemplateInputObjectSchema)
}).strict();
export const SystemRoleTemplateUncheckedCreateInputObjectSchema: z.ZodType<Prisma.SystemRoleTemplateUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemRoleTemplateUncheckedCreateInput>;
export const SystemRoleTemplateUncheckedCreateInputObjectZodSchema = makeSchema();
