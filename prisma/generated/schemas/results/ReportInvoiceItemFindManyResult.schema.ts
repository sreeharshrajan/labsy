import { z } from 'zod';
export const ReportInvoiceItemFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  quantity: z.number().int(),
  price: z.number(),
  discount: z.number(),
  total: z.number(),
  createdAt: z.date(),
  invoiceId: z.string(),
  serviceId: z.string(),
  invoice: z.unknown(),
  service: z.unknown()
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