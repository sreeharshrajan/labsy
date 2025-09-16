import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { PaymentTypeSchema } from '../enums/PaymentType.schema';
import { EnumPaymentTypeFieldUpdateOperationsInputObjectSchema } from './EnumPaymentTypeFieldUpdateOperationsInput.schema';
import { InvoiceStatusSchema } from '../enums/InvoiceStatus.schema';
import { EnumInvoiceStatusFieldUpdateOperationsInputObjectSchema } from './EnumInvoiceStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { TenantUpdateOneRequiredWithoutReportInvoiceNestedInputObjectSchema } from './TenantUpdateOneRequiredWithoutReportInvoiceNestedInput.schema';
import { CustomerUpdateOneRequiredWithoutReportInvoiceNestedInputObjectSchema } from './CustomerUpdateOneRequiredWithoutReportInvoiceNestedInput.schema';
import { ReportInvoiceItemUpdateManyWithoutInvoiceNestedInputObjectSchema } from './ReportInvoiceItemUpdateManyWithoutInvoiceNestedInput.schema';
import { ReportInvoicePaymentUpdateManyWithoutInvoiceNestedInputObjectSchema } from './ReportInvoicePaymentUpdateManyWithoutInvoiceNestedInput.schema';
import { DoctorCommissionLogUpdateManyWithoutInvoiceNestedInputObjectSchema } from './DoctorCommissionLogUpdateManyWithoutInvoiceNestedInput.schema';
import { ReportUpdateManyWithoutInvoiceNestedInputObjectSchema } from './ReportUpdateManyWithoutInvoiceNestedInput.schema';
import { ServiceUpdateOneWithoutReportInvoiceNestedInputObjectSchema } from './ServiceUpdateOneWithoutReportInvoiceNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  totalAmount: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  discount: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  netAmount: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  paymentType: z.union([PaymentTypeSchema, z.lazy(() => EnumPaymentTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([InvoiceStatusSchema, z.lazy(() => EnumInvoiceStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  issuedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tenant: z.lazy(() => TenantUpdateOneRequiredWithoutReportInvoiceNestedInputObjectSchema).optional(),
  customer: z.lazy(() => CustomerUpdateOneRequiredWithoutReportInvoiceNestedInputObjectSchema).optional(),
  items: z.lazy(() => ReportInvoiceItemUpdateManyWithoutInvoiceNestedInputObjectSchema).optional(),
  payments: z.lazy(() => ReportInvoicePaymentUpdateManyWithoutInvoiceNestedInputObjectSchema).optional(),
  logs: z.lazy(() => DoctorCommissionLogUpdateManyWithoutInvoiceNestedInputObjectSchema).optional(),
  Report: z.lazy(() => ReportUpdateManyWithoutInvoiceNestedInputObjectSchema).optional(),
  Service: z.lazy(() => ServiceUpdateOneWithoutReportInvoiceNestedInputObjectSchema).optional()
}).strict();
export const ReportInvoiceUpdateWithoutDoctorInputObjectSchema: z.ZodType<Prisma.ReportInvoiceUpdateWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceUpdateWithoutDoctorInput>;
export const ReportInvoiceUpdateWithoutDoctorInputObjectZodSchema = makeSchema();
