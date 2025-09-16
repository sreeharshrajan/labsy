import { z } from 'zod';
export const DoctorAddressGroupByResultSchema = z.array(z.object({
  id: z.string(),
  doctorId: z.string(),
  addressId: z.string(),
  isPrimary: z.boolean(),
  createdAt: z.date(),
  deletedAt: z.date(),
  _count: z.object({
    id: z.number(),
    doctorId: z.number(),
    addressId: z.number(),
    isPrimary: z.number(),
    createdAt: z.number(),
    deletedAt: z.number(),
    doctor: z.number(),
    address: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    doctorId: z.string().nullable(),
    addressId: z.string().nullable(),
    createdAt: z.date().nullable(),
    deletedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    doctorId: z.string().nullable(),
    addressId: z.string().nullable(),
    createdAt: z.date().nullable(),
    deletedAt: z.date().nullable()
  }).nullable().optional()
}));