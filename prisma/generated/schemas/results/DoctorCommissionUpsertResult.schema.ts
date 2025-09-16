import { z } from 'zod';
export const DoctorCommissionUpsertResultSchema = z.object({
  id: z.string(),
  commissionType: z.string(),
  value: z.number(),
  isActive: z.boolean(),
  notes: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional(),
  doctorId: z.string(),
  doctor: z.unknown(),
  DoctorCommissionLog: z.array(z.unknown())
});