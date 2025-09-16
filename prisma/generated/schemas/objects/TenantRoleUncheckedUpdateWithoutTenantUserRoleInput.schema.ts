import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { TenantPermissionUncheckedUpdateManyWithoutRoleNestedInputObjectSchema } from './TenantPermissionUncheckedUpdateManyWithoutRoleNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isSystem: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  systemRoleTemplateId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tenantId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  permissions: z.lazy(() => TenantPermissionUncheckedUpdateManyWithoutRoleNestedInputObjectSchema).optional()
}).strict();
export const TenantRoleUncheckedUpdateWithoutTenantUserRoleInputObjectSchema: z.ZodType<Prisma.TenantRoleUncheckedUpdateWithoutTenantUserRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleUncheckedUpdateWithoutTenantUserRoleInput>;
export const TenantRoleUncheckedUpdateWithoutTenantUserRoleInputObjectZodSchema = makeSchema();
