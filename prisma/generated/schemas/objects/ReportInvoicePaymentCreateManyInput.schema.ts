import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PaymentMethodSchema } from '../enums/PaymentMethod.schema';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  amount: z.number(),
  method: PaymentMethodSchema,
  status: PaymentStatusSchema.optional(),
  referenceNo: z.string().optional().nullable(),
  transactionId: z.string().optional().nullable(),
  paidAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  invoiceId: z.string(),
  tenantId: z.string()
}).strict();
export const ReportInvoicePaymentCreateManyInputObjectSchema: z.ZodType<Prisma.ReportInvoicePaymentCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoicePaymentCreateManyInput>;
export const ReportInvoicePaymentCreateManyInputObjectZodSchema = makeSchema();
