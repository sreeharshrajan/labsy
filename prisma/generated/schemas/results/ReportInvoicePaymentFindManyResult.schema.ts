import { z } from 'zod';
export const ReportInvoicePaymentFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});