import { z } from 'zod';
export const DoctorCommissionPaymentFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  amount: z.number(),
  paymentDate: z.date(),
  paymentMethod: z.unknown(),
  referenceNo: z.string().optional(),
  status: z.unknown(),
  notes: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional(),
  doctorId: z.string(),
  doctor: z.unknown()
}));