import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  amount: z.literal(true).optional(),
  method: z.literal(true).optional(),
  status: z.literal(true).optional(),
  referenceNo: z.literal(true).optional(),
  transactionId: z.literal(true).optional(),
  paidAt: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  deletedAt: z.literal(true).optional(),
  invoiceId: z.literal(true).optional(),
  tenantId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ReportInvoicePaymentCountAggregateInputObjectSchema: z.ZodType<Prisma.ReportInvoicePaymentCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoicePaymentCountAggregateInputType>;
export const ReportInvoicePaymentCountAggregateInputObjectZodSchema = makeSchema();
