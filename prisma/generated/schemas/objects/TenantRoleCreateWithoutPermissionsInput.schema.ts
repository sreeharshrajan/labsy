import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SystemRoleTemplateCreateNestedOneWithoutTenantRolesInputObjectSchema } from './SystemRoleTemplateCreateNestedOneWithoutTenantRolesInput.schema';
import { TenantCreateNestedOneWithoutRolesInputObjectSchema } from './TenantCreateNestedOneWithoutRolesInput.schema';
import { TenantUserRoleCreateNestedManyWithoutRoleInputObjectSchema } from './TenantUserRoleCreateNestedManyWithoutRoleInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  isSystem: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  systemRoleTemplate: z.lazy(() => SystemRoleTemplateCreateNestedOneWithoutTenantRolesInputObjectSchema).optional(),
  tenant: z.lazy(() => TenantCreateNestedOneWithoutRolesInputObjectSchema),
  TenantUserRole: z.lazy(() => TenantUserRoleCreateNestedManyWithoutRoleInputObjectSchema).optional()
}).strict();
export const TenantRoleCreateWithoutPermissionsInputObjectSchema: z.ZodType<Prisma.TenantRoleCreateWithoutPermissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleCreateWithoutPermissionsInput>;
export const TenantRoleCreateWithoutPermissionsInputObjectZodSchema = makeSchema();
