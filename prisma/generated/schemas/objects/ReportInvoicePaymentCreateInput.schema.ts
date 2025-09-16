import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PaymentMethodSchema } from '../enums/PaymentMethod.schema';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema';
import { ReportInvoiceCreateNestedOneWithoutPaymentsInputObjectSchema } from './ReportInvoiceCreateNestedOneWithoutPaymentsInput.schema';
import { TenantCreateNestedOneWithoutReportInvoicePaymentInputObjectSchema } from './TenantCreateNestedOneWithoutReportInvoicePaymentInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  amount: z.number(),
  method: PaymentMethodSchema,
  status: PaymentStatusSchema.optional(),
  referenceNo: z.string().optional().nullable(),
  transactionId: z.string().optional().nullable(),
  paidAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  invoice: z.lazy(() => ReportInvoiceCreateNestedOneWithoutPaymentsInputObjectSchema),
  tenant: z.lazy(() => TenantCreateNestedOneWithoutReportInvoicePaymentInputObjectSchema)
}).strict();
export const ReportInvoicePaymentCreateInputObjectSchema: z.ZodType<Prisma.ReportInvoicePaymentCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoicePaymentCreateInput>;
export const ReportInvoicePaymentCreateInputObjectZodSchema = makeSchema();
