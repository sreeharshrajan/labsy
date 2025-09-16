import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { PaymentMethodSchema } from '../enums/PaymentMethod.schema';
import { EnumPaymentMethodFieldUpdateOperationsInputObjectSchema } from './EnumPaymentMethodFieldUpdateOperationsInput.schema';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema';
import { EnumPaymentStatusFieldUpdateOperationsInputObjectSchema } from './EnumPaymentStatusFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ReportInvoiceUpdateOneRequiredWithoutPaymentsNestedInputObjectSchema } from './ReportInvoiceUpdateOneRequiredWithoutPaymentsNestedInput.schema';
import { TenantUpdateOneRequiredWithoutReportInvoicePaymentNestedInputObjectSchema } from './TenantUpdateOneRequiredWithoutReportInvoicePaymentNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  amount: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  method: z.union([PaymentMethodSchema, z.lazy(() => EnumPaymentMethodFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([PaymentStatusSchema, z.lazy(() => EnumPaymentStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  referenceNo: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  transactionId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  paidAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  invoice: z.lazy(() => ReportInvoiceUpdateOneRequiredWithoutPaymentsNestedInputObjectSchema).optional(),
  tenant: z.lazy(() => TenantUpdateOneRequiredWithoutReportInvoicePaymentNestedInputObjectSchema).optional()
}).strict();
export const ReportInvoicePaymentUpdateInputObjectSchema: z.ZodType<Prisma.ReportInvoicePaymentUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoicePaymentUpdateInput>;
export const ReportInvoicePaymentUpdateInputObjectZodSchema = makeSchema();
