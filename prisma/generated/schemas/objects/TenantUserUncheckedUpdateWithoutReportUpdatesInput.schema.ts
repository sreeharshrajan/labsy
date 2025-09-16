import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { TenantUserRoleUncheckedUpdateManyWithoutTenantUserNestedInputObjectSchema } from './TenantUserRoleUncheckedUpdateManyWithoutTenantUserNestedInput.schema';
import { ReportUncheckedUpdateManyWithoutCreatedByUserNestedInputObjectSchema } from './ReportUncheckedUpdateManyWithoutCreatedByUserNestedInput.schema';
import { ReportUncheckedUpdateManyWithoutCollectedByUserNestedInputObjectSchema } from './ReportUncheckedUpdateManyWithoutCollectedByUserNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tenantId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tenantRoles: z.lazy(() => TenantUserRoleUncheckedUpdateManyWithoutTenantUserNestedInputObjectSchema).optional(),
  Report: z.lazy(() => ReportUncheckedUpdateManyWithoutCreatedByUserNestedInputObjectSchema).optional(),
  collectedBy: z.lazy(() => ReportUncheckedUpdateManyWithoutCollectedByUserNestedInputObjectSchema).optional()
}).strict();
export const TenantUserUncheckedUpdateWithoutReportUpdatesInputObjectSchema: z.ZodType<Prisma.TenantUserUncheckedUpdateWithoutReportUpdatesInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserUncheckedUpdateWithoutReportUpdatesInput>;
export const TenantUserUncheckedUpdateWithoutReportUpdatesInputObjectZodSchema = makeSchema();
