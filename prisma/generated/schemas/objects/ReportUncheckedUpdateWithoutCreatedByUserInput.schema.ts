import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ReportStatusSchema } from '../enums/ReportStatus.schema';
import { EnumReportStatusFieldUpdateOperationsInputObjectSchema } from './EnumReportStatusFieldUpdateOperationsInput.schema';
import { CustomerTypeSchema } from '../enums/CustomerType.schema';
import { NullableEnumCustomerTypeFieldUpdateOperationsInputObjectSchema } from './NullableEnumCustomerTypeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { ReportDetailUncheckedUpdateManyWithoutReportNestedInputObjectSchema } from './ReportDetailUncheckedUpdateManyWithoutReportNestedInput.schema';
import { ReportChangeLogUncheckedUpdateManyWithoutReportNestedInputObjectSchema } from './ReportChangeLogUncheckedUpdateManyWithoutReportNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  reportCode: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  fileUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  collectedPlace: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  notes: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  status: z.union([ReportStatusSchema, z.lazy(() => EnumReportStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  customerType: z.union([CustomerTypeSchema, z.lazy(() => NullableEnumCustomerTypeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  issuedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  collectedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  version: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  tenantId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  customerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  doctorId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  invoiceId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  collectedBy: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  customerAddressId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  labAddressId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  details: z.lazy(() => ReportDetailUncheckedUpdateManyWithoutReportNestedInputObjectSchema).optional(),
  updateLog: z.lazy(() => ReportChangeLogUncheckedUpdateManyWithoutReportNestedInputObjectSchema).optional()
}).strict();
export const ReportUncheckedUpdateWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.ReportUncheckedUpdateWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUncheckedUpdateWithoutCreatedByUserInput>;
export const ReportUncheckedUpdateWithoutCreatedByUserInputObjectZodSchema = makeSchema();
