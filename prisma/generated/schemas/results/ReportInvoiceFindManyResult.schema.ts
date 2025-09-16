import { z } from 'zod';
export const ReportInvoiceFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  totalAmount: z.number(),
  discount: z.number(),
  netAmount: z.number(),
  paymentType: z.unknown(),
  status: z.unknown(),
  issuedAt: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional(),
  tenantId: z.string(),
  customerId: z.string(),
  doctorId: z.string().optional(),
  tenant: z.unknown(),
  customer: z.unknown(),
  doctor: z.unknown().optional(),
  items: z.array(z.unknown()),
  payments: z.array(z.unknown()),
  logs: z.array(z.unknown()),
  Report: z.array(z.unknown()),
  Service: z.unknown().optional(),
  serviceId: z.string().optional()
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