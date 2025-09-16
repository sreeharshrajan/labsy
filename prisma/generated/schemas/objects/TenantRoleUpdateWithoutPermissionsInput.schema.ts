import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { SystemRoleTemplateUpdateOneWithoutTenantRolesNestedInputObjectSchema } from './SystemRoleTemplateUpdateOneWithoutTenantRolesNestedInput.schema';
import { TenantUpdateOneRequiredWithoutRolesNestedInputObjectSchema } from './TenantUpdateOneRequiredWithoutRolesNestedInput.schema';
import { TenantUserRoleUpdateManyWithoutRoleNestedInputObjectSchema } from './TenantUserRoleUpdateManyWithoutRoleNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isSystem: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  systemRoleTemplate: z.lazy(() => SystemRoleTemplateUpdateOneWithoutTenantRolesNestedInputObjectSchema).optional(),
  tenant: z.lazy(() => TenantUpdateOneRequiredWithoutRolesNestedInputObjectSchema).optional(),
  TenantUserRole: z.lazy(() => TenantUserRoleUpdateManyWithoutRoleNestedInputObjectSchema).optional()
}).strict();
export const TenantRoleUpdateWithoutPermissionsInputObjectSchema: z.ZodType<Prisma.TenantRoleUpdateWithoutPermissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleUpdateWithoutPermissionsInput>;
export const TenantRoleUpdateWithoutPermissionsInputObjectZodSchema = makeSchema();
