import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { TenantRoleUncheckedCreateNestedManyWithoutSystemRoleTemplateInputObjectSchema } from './TenantRoleUncheckedCreateNestedManyWithoutSystemRoleTemplateInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  role: RoleSchema.optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  isDefault: z.boolean().optional(),
  tenantRoles: z.lazy(() => TenantRoleUncheckedCreateNestedManyWithoutSystemRoleTemplateInputObjectSchema).optional()
}).strict();
export const SystemRoleTemplateUncheckedCreateWithoutPermissionsInputObjectSchema: z.ZodType<Prisma.SystemRoleTemplateUncheckedCreateWithoutPermissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemRoleTemplateUncheckedCreateWithoutPermissionsInput>;
export const SystemRoleTemplateUncheckedCreateWithoutPermissionsInputObjectZodSchema = makeSchema();
