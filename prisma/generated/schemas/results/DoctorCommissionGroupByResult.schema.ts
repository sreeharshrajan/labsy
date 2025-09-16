import { z } from 'zod';
export const DoctorCommissionGroupByResultSchema = z.array(z.object({
  id: z.string(),
  commissionType: z.string(),
  value: z.number(),
  isActive: z.boolean(),
  notes: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date(),
  doctorId: z.string(),
  _count: z.object({
    id: z.number(),
    commissionType: z.number(),
    value: z.number(),
    isActive: z.number(),
    notes: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    deletedAt: z.number(),
    doctorId: z.number(),
    doctor: z.number(),
    DoctorCommissionLog: z.number()
  }).optional(),
  _sum: z.object({
    value: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    value: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    commissionType: z.string().nullable(),
    value: z.number().nullable(),
    notes: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable(),
    doctorId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    commissionType: z.string().nullable(),
    value: z.number().nullable(),
    notes: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable(),
    doctorId: z.string().nullable()
  }).nullable().optional()
}));