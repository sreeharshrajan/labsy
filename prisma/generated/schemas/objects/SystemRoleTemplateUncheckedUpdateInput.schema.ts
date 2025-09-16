import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { RoleSchema } from '../enums/Role.schema';
import { EnumRoleFieldUpdateOperationsInputObjectSchema } from './EnumRoleFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { TenantRoleUncheckedUpdateManyWithoutSystemRoleTemplateNestedInputObjectSchema } from './TenantRoleUncheckedUpdateManyWithoutSystemRoleTemplateNestedInput.schema';
import { SystemPermissionUncheckedUpdateManyWithoutRoleTemplateNestedInputObjectSchema } from './SystemPermissionUncheckedUpdateManyWithoutRoleTemplateNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([RoleSchema, z.lazy(() => EnumRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isDefault: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  tenantRoles: z.lazy(() => TenantRoleUncheckedUpdateManyWithoutSystemRoleTemplateNestedInputObjectSchema).optional(),
  permissions: z.lazy(() => SystemPermissionUncheckedUpdateManyWithoutRoleTemplateNestedInputObjectSchema).optional()
}).strict();
export const SystemRoleTemplateUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.SystemRoleTemplateUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemRoleTemplateUncheckedUpdateInput>;
export const SystemRoleTemplateUncheckedUpdateInputObjectZodSchema = makeSchema();
