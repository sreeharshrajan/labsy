import { z } from 'zod';
export const ReportInvoiceItemGroupByResultSchema = z.array(z.object({
  id: z.string(),
  quantity: z.number().int(),
  price: z.number(),
  discount: z.number(),
  total: z.number(),
  createdAt: z.date(),
  invoiceId: z.string(),
  serviceId: z.string(),
  _count: z.object({
    id: z.number(),
    quantity: z.number(),
    price: z.number(),
    discount: z.number(),
    total: z.number(),
    createdAt: z.number(),
    invoiceId: z.number(),
    serviceId: z.number(),
    invoice: z.number(),
    service: z.number()
  }).optional(),
  _sum: z.object({
    quantity: z.number().nullable(),
    price: z.number().nullable(),
    discount: z.number().nullable(),
    total: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    quantity: z.number().nullable(),
    price: z.number().nullable(),
    discount: z.number().nullable(),
    total: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    quantity: z.number().int().nullable(),
    price: z.number().nullable(),
    discount: z.number().nullable(),
    total: z.number().nullable(),
    createdAt: z.date().nullable(),
    invoiceId: z.string().nullable(),
    serviceId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    quantity: z.number().int().nullable(),
    price: z.number().nullable(),
    discount: z.number().nullable(),
    total: z.number().nullable(),
    createdAt: z.date().nullable(),
    invoiceId: z.string().nullable(),
    serviceId: z.string().nullable()
  }).nullable().optional()
}));