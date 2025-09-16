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
  systemRoleTemplateId: z.string().optional().nullable(),
  tenantId: z.string(),
  permissions: z.lazy(() => TenantPermissionUncheckedCreateNestedManyWithoutRoleInputObjectSchema),
  TenantUserRole: z.lazy(() => TenantUserRoleUncheckedCreateNestedManyWithoutRoleInputObjectSchema)
}).strict();
export const TenantRoleUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TenantRoleUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleUncheckedCreateInput>;
export const TenantRoleUncheckedCreateInputObjectZodSchema = makeSchema();
