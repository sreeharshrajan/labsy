import { z } from 'zod';
export const DoctorCommissionPaymentAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    amount: z.number(),
    paymentDate: z.number(),
    paymentMethod: z.number(),
    referenceNo: z.number(),
    status: z.number(),
    notes: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    deletedAt: z.number(),
    doctorId: z.number(),
    doctor: z.number()
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
    paymentDate: z.date().nullable(),
    referenceNo: z.string().nullable(),
    notes: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable(),
    doctorId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    amount: z.number().nullable(),
    paymentDate: z.date().nullable(),
    referenceNo: z.string().nullable(),
    notes: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable(),
    doctorId: z.string().nullable()
  }).nullable().optional()});