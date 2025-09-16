import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantPermissionUncheckedCreateNestedManyWithoutRoleInputObjectSchema } from './TenantPermissionUncheckedCreateNestedManyWithoutRoleInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  isSystem: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  systemRoleTemplateId: z.string().optional().nullable(),
  tenantId: z.string(),
  permissions: z.lazy(() => TenantPermissionUncheckedCreateNestedManyWithoutRoleInputObjectSchema).optional()
}).strict();
export const TenantRoleUncheckedCreateWithoutTenantUserRoleInputObjectSchema: z.ZodType<Prisma.TenantRoleUncheckedCreateWithoutTenantUserRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleUncheckedCreateWithoutTenantUserRoleInput>;
export const TenantRoleUncheckedCreateWithoutTenantUserRoleInputObjectZodSchema = makeSchema();
