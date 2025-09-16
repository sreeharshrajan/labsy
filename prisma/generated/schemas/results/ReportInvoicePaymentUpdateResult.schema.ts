import { z } from 'zod';
export const ReportInvoicePaymentUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  amount: z.number(),
  method: z.unknown(),
  status: z.unknown(),
  referenceNo: z.string().optional(),
  transactionId: z.string().optional(),
  paidAt: z.date().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional(),
  invoiceId: z.string(),
  tenantId: z.string(),
  invoice: z.unknown(),
  tenant: z.unknown()
}));