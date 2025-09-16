import { z } from 'zod';
export const DoctorCommissionLogAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    doctorId: z.number(),
    invoiceId: z.number(),
    commissionId: z.number(),
    reportDetailId: z.number(),
    commissionAmt: z.number(),
    commissionStatus: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    commission: z.number(),
    doctor: z.number(),
    invoice: z.number(),
    reportDetail: z.number()
  }).optional(),
  _sum: z.object({
    commissionAmt: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    commissionAmt: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    doctorId: z.string().nullable(),
    invoiceId: z.string().nullable(),
    commissionId: z.string().nullable(),
    reportDetailId: z.string().nullable(),
    commissionAmt: z.number().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    doctorId: z.string().nullable(),
    invoiceId: z.string().nullable(),
    commissionId: z.string().nullable(),
    reportDetailId: z.string().nullable(),
    commissionAmt: z.number().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});