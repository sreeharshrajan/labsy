import { z } from 'zod';
export const DoctorAddressFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  doctorId: z.string(),
  addressId: z.string(),
  isPrimary: z.boolean(),
  createdAt: z.date(),
  deletedAt: z.date().optional(),
  doctor: z.unknown(),
  address: z.unknown()
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