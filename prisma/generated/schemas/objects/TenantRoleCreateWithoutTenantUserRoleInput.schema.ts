import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantPermissionCreateNestedManyWithoutRoleInputObjectSchema } from './TenantPermissionCreateNestedManyWithoutRoleInput.schema';
import { SystemRoleTemplateCreateNestedOneWithoutTenantRolesInputObjectSchema } from './SystemRoleTemplateCreateNestedOneWithoutTenantRolesInput.schema';
import { TenantCreateNestedOneWithoutRolesInputObjectSchema } from './TenantCreateNestedOneWithoutRolesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  isSystem: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  permissions: z.lazy(() => TenantPermissionCreateNestedManyWithoutRoleInputObjectSchema).optional(),
  systemRoleTemplate: z.lazy(() => SystemRoleTemplateCreateNestedOneWithoutTenantRolesInputObjectSchema).optional(),
  tenant: z.lazy(() => TenantCreateNestedOneWithoutRolesInputObjectSchema)
}).strict();
export const TenantRoleCreateWithoutTenantUserRoleInputObjectSchema: z.ZodType<Prisma.TenantRoleCreateWithoutTenantUserRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleCreateWithoutTenantUserRoleInput>;
export const TenantRoleCreateWithoutTenantUserRoleInputObjectZodSchema = makeSchema();
