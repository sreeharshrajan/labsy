import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserRoleUncheckedCreateNestedManyWithoutRoleInputObjectSchema } from './TenantUserRoleUncheckedCreateNestedManyWithoutRoleInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  isSystem: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  systemRoleTemplateId: z.string().optional().nullable(),
  tenantId: z.string(),
  TenantUserRole: z.lazy(() => TenantUserRoleUncheckedCreateNestedManyWithoutRoleInputObjectSchema).optional()
}).strict();
export const TenantRoleUncheckedCreateWithoutPermissionsInputObjectSchema: z.ZodType<Prisma.TenantRoleUncheckedCreateWithoutPermissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleUncheckedCreateWithoutPermissionsInput>;
export const TenantRoleUncheckedCreateWithoutPermissionsInputObjectZodSchema = makeSchema();
