import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { TenantUserRoleUpdateManyWithoutTenantUserNestedInputObjectSchema } from './TenantUserRoleUpdateManyWithoutTenantUserNestedInput.schema';
import { UserUpdateOneRequiredWithoutTenantsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutTenantsNestedInput.schema';
import { TenantUpdateOneRequiredWithoutUsersNestedInputObjectSchema } from './TenantUpdateOneRequiredWithoutUsersNestedInput.schema';
import { ReportUpdateManyWithoutCreatedByUserNestedInputObjectSchema } from './ReportUpdateManyWithoutCreatedByUserNestedInput.schema';
import { ReportChangeLogUpdateManyWithoutChangedByNestedInputObjectSchema } from './ReportChangeLogUpdateManyWithoutChangedByNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tenantRoles: z.lazy(() => TenantUserRoleUpdateManyWithoutTenantUserNestedInputObjectSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutTenantsNestedInputObjectSchema).optional(),
  tenant: z.lazy(() => TenantUpdateOneRequiredWithoutUsersNestedInputObjectSchema).optional(),
  Report: z.lazy(() => ReportUpdateManyWithoutCreatedByUserNestedInputObjectSchema).optional(),
  reportUpdates: z.lazy(() => ReportChangeLogUpdateManyWithoutChangedByNestedInputObjectSchema).optional()
}).strict();
export const TenantUserUpdateWithoutCollectedByInputObjectSchema: z.ZodType<Prisma.TenantUserUpdateWithoutCollectedByInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserUpdateWithoutCollectedByInput>;
export const TenantUserUpdateWithoutCollectedByInputObjectZodSchema = makeSchema();
