import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantPermissionCreateNestedManyWithoutRoleInputObjectSchema } from './TenantPermissionCreateNestedManyWithoutRoleInput.schema';
import { TenantCreateNestedOneWithoutRolesInputObjectSchema } from './TenantCreateNestedOneWithoutRolesInput.schema';
import { TenantUserRoleCreateNestedManyWithoutRoleInputObjectSchema } from './TenantUserRoleCreateNestedManyWithoutRoleInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  isSystem: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  permissions: z.lazy(() => TenantPermissionCreateNestedManyWithoutRoleInputObjectSchema).optional(),
  tenant: z.lazy(() => TenantCreateNestedOneWithoutRolesInputObjectSchema),
  TenantUserRole: z.lazy(() => TenantUserRoleCreateNestedManyWithoutRoleInputObjectSchema).optional()
}).strict();
export const TenantRoleCreateWithoutSystemRoleTemplateInputObjectSchema: z.ZodType<Prisma.TenantRoleCreateWithoutSystemRoleTemplateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleCreateWithoutSystemRoleTemplateInput>;
export const TenantRoleCreateWithoutSystemRoleTemplateInputObjectZodSchema = makeSchema();
