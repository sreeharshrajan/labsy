import { z } from 'zod';
export const ReportInvoicePaymentAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    amount: z.number(),
    method: z.number(),
    status: z.number(),
    referenceNo: z.number(),
    transactionId: z.number(),
    paidAt: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    deletedAt: z.number(),
    invoiceId: z.number(),
    tenantId: z.number(),
    invoice: z.number(),
    tenant: z.number()
  }).optional(),
  _sum: z.object({
    amount: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    amount: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    amount: z.number().nullable(),
    referenceNo: z.string().nullable(),
    transactionId: z.string().nullable(),
    paidAt: z.date().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable(),
    invoiceId: z.string().nullable(),
    tenantId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    amount: z.number().nullable(),
    referenceNo: z.string().nullable(),
    transactionId: z.string().nullable(),
    paidAt: z.date().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable(),
    invoiceId: z.string().nullable(),
    tenantId: z.string().nullable()
  }).nullable().optional()});