import { z } from 'zod';
export const DoctorCommissionFindManyResultSchema = z.object({
  data: z.array(z.object({
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