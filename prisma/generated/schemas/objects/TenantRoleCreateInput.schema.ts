import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantPermissionCreateNestedManyWithoutRoleInputObjectSchema } from './TenantPermissionCreateNestedManyWithoutRoleInput.schema';
import { SystemRoleTemplateCreateNestedOneWithoutTenantRolesInputObjectSchema } from './SystemRoleTemplateCreateNestedOneWithoutTenantRolesInput.schema';
import { TenantCreateNestedOneWithoutRolesInputObjectSchema } from './TenantCreateNestedOneWithoutRolesInput.schema';
import { TenantUserRoleCreateNestedManyWithoutRoleInputObjectSchema } from './TenantUserRoleCreateNestedManyWithoutRoleInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  isSystem: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  permissions: z.lazy(() => TenantPermissionCreateNestedManyWithoutRoleInputObjectSchema),
  systemRoleTemplate: z.lazy(() => SystemRoleTemplateCreateNestedOneWithoutTenantRolesInputObjectSchema).optional(),
  tenant: z.lazy(() => TenantCreateNestedOneWithoutRolesInputObjectSchema),
  TenantUserRole: z.lazy(() => TenantUserRoleCreateNestedManyWithoutRoleInputObjectSchema)
}).strict();
export const TenantRoleCreateInputObjectSchema: z.ZodType<Prisma.TenantRoleCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleCreateInput>;
export const TenantRoleCreateInputObjectZodSchema = makeSchema();
