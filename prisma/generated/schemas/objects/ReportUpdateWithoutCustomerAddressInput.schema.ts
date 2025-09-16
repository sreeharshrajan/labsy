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
import { TenantUpdateOneRequiredWithoutReportNestedInputObjectSchema } from './TenantUpdateOneRequiredWithoutReportNestedInput.schema';
import { CustomerUpdateOneRequiredWithoutReportNestedInputObjectSchema } from './CustomerUpdateOneRequiredWithoutReportNestedInput.schema';
import { DoctorUpdateOneWithoutReportNestedInputObjectSchema } from './DoctorUpdateOneWithoutReportNestedInput.schema';
import { ReportInvoiceUpdateOneRequiredWithoutReportNestedInputObjectSchema } from './ReportInvoiceUpdateOneRequiredWithoutReportNestedInput.schema';
import { ReportDetailUpdateManyWithoutReportNestedInputObjectSchema } from './ReportDetailUpdateManyWithoutReportNestedInput.schema';
import { ReportChangeLogUpdateManyWithoutReportNestedInputObjectSchema } from './ReportChangeLogUpdateManyWithoutReportNestedInput.schema';
import { TenantUserUpdateOneWithoutReportNestedInputObjectSchema } from './TenantUserUpdateOneWithoutReportNestedInput.schema';
import { TenantUserUpdateOneWithoutCollectedByNestedInputObjectSchema } from './TenantUserUpdateOneWithoutCollectedByNestedInput.schema';
import { TenantAddressUpdateOneWithoutReportNestedInputObjectSchema } from './TenantAddressUpdateOneWithoutReportNestedInput.schema'

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
  tenant: z.lazy(() => TenantUpdateOneRequiredWithoutReportNestedInputObjectSchema).optional(),
  customer: z.lazy(() => CustomerUpdateOneRequiredWithoutReportNestedInputObjectSchema).optional(),
  doctor: z.lazy(() => DoctorUpdateOneWithoutReportNestedInputObjectSchema).optional(),
  invoice: z.lazy(() => ReportInvoiceUpdateOneRequiredWithoutReportNestedInputObjectSchema).optional(),
  details: z.lazy(() => ReportDetailUpdateManyWithoutReportNestedInputObjectSchema).optional(),
  updateLog: z.lazy(() => ReportChangeLogUpdateManyWithoutReportNestedInputObjectSchema).optional(),
  createdByUser: z.lazy(() => TenantUserUpdateOneWithoutReportNestedInputObjectSchema).optional(),
  collectedByUser: z.lazy(() => TenantUserUpdateOneWithoutCollectedByNestedInputObjectSchema).optional(),
  labAddress: z.lazy(() => TenantAddressUpdateOneWithoutReportNestedInputObjectSchema).optional()
}).strict();
export const ReportUpdateWithoutCustomerAddressInputObjectSchema: z.ZodType<Prisma.ReportUpdateWithoutCustomerAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateWithoutCustomerAddressInput>;
export const ReportUpdateWithoutCustomerAddressInputObjectZodSchema = makeSchema();
