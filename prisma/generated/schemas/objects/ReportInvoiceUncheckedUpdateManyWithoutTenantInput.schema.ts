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
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

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
  customerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  doctorId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  serviceId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const ReportInvoiceUncheckedUpdateManyWithoutTenantInputObjectSchema: z.ZodType<Prisma.ReportInvoiceUncheckedUpdateManyWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceUncheckedUpdateManyWithoutTenantInput>;
export const ReportInvoiceUncheckedUpdateManyWithoutTenantInputObjectZodSchema = makeSchema();
