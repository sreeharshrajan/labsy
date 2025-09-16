import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantPermissionCreateNestedManyWithoutRoleInputObjectSchema } from './TenantPermissionCreateNestedManyWithoutRoleInput.schema';
import { SystemRoleTemplateCreateNestedOneWithoutTenantRolesInputObjectSchema } from './SystemRoleTemplateCreateNestedOneWithoutTenantRolesInput.schema';
import { TenantUserRoleCreateNestedManyWithoutRoleInputObjectSchema } from './TenantUserRoleCreateNestedManyWithoutRoleInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  isSystem: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  permissions: z.lazy(() => TenantPermissionCreateNestedManyWithoutRoleInputObjectSchema).optional(),
  systemRoleTemplate: z.lazy(() => SystemRoleTemplateCreateNestedOneWithoutTenantRolesInputObjectSchema).optional(),
  TenantUserRole: z.lazy(() => TenantUserRoleCreateNestedManyWithoutRoleInputObjectSchema).optional()
}).strict();
export const TenantRoleCreateWithoutTenantInputObjectSchema: z.ZodType<Prisma.TenantRoleCreateWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleCreateWithoutTenantInput>;
export const TenantRoleCreateWithoutTenantInputObjectZodSchema = makeSchema();
