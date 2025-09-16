import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PaymentTypeSchema } from '../enums/PaymentType.schema';
import { InvoiceStatusSchema } from '../enums/InvoiceStatus.schema';
import { ReportInvoiceItemUncheckedCreateNestedManyWithoutInvoiceInputObjectSchema } from './ReportInvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput.schema';
import { ReportInvoicePaymentUncheckedCreateNestedManyWithoutInvoiceInputObjectSchema } from './ReportInvoicePaymentUncheckedCreateNestedManyWithoutInvoiceInput.schema';
import { DoctorCommissionLogUncheckedCreateNestedManyWithoutInvoiceInputObjectSchema } from './DoctorCommissionLogUncheckedCreateNestedManyWithoutInvoiceInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  totalAmount: z.number(),
  discount: z.number().optional(),
  netAmount: z.number(),
  paymentType: PaymentTypeSchema,
  status: InvoiceStatusSchema.optional(),
  issuedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  tenantId: z.string(),
  customerId: z.string(),
  doctorId: z.string().optional().nullable(),
  serviceId: z.string().optional().nullable(),
  items: z.lazy(() => ReportInvoiceItemUncheckedCreateNestedManyWithoutInvoiceInputObjectSchema).optional(),
  payments: z.lazy(() => ReportInvoicePaymentUncheckedCreateNestedManyWithoutInvoiceInputObjectSchema).optional(),
  logs: z.lazy(() => DoctorCommissionLogUncheckedCreateNestedManyWithoutInvoiceInputObjectSchema).optional()
}).strict();
export const ReportInvoiceUncheckedCreateWithoutReportInputObjectSchema: z.ZodType<Prisma.ReportInvoiceUncheckedCreateWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceUncheckedCreateWithoutReportInput>;
export const ReportInvoiceUncheckedCreateWithoutReportInputObjectZodSchema = makeSchema();
