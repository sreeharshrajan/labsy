import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { SystemPermissionUncheckedCreateNestedManyWithoutRoleTemplateInputObjectSchema } from './SystemPermissionUncheckedCreateNestedManyWithoutRoleTemplateInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  role: RoleSchema.optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  isDefault: z.boolean().optional(),
  permissions: z.lazy(() => SystemPermissionUncheckedCreateNestedManyWithoutRoleTemplateInputObjectSchema).optional()
}).strict();
export const SystemRoleTemplateUncheckedCreateWithoutTenantRolesInputObjectSchema: z.ZodType<Prisma.SystemRoleTemplateUncheckedCreateWithoutTenantRolesInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemRoleTemplateUncheckedCreateWithoutTenantRolesInput>;
export const SystemRoleTemplateUncheckedCreateWithoutTenantRolesInputObjectZodSchema = makeSchema();
