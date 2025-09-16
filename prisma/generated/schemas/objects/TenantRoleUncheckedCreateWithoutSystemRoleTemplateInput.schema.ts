import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantPermissionUncheckedCreateNestedManyWithoutRoleInputObjectSchema } from './TenantPermissionUncheckedCreateNestedManyWithoutRoleInput.schema';
import { TenantUserRoleUncheckedCreateNestedManyWithoutRoleInputObjectSchema } from './TenantUserRoleUncheckedCreateNestedManyWithoutRoleInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  isSystem: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tenantId: z.string(),
  permissions: z.lazy(() => TenantPermissionUncheckedCreateNestedManyWithoutRoleInputObjectSchema).optional(),
  TenantUserRole: z.lazy(() => TenantUserRoleUncheckedCreateNestedManyWithoutRoleInputObjectSchema).optional()
}).strict();
export const TenantRoleUncheckedCreateWithoutSystemRoleTemplateInputObjectSchema: z.ZodType<Prisma.TenantRoleUncheckedCreateWithoutSystemRoleTemplateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleUncheckedCreateWithoutSystemRoleTemplateInput>;
export const TenantRoleUncheckedCreateWithoutSystemRoleTemplateInputObjectZodSchema = makeSchema();
