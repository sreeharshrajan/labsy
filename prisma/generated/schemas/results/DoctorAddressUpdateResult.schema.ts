import { z } from 'zod';
export const DoctorAddressUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  doctorId: z.string(),
  addressId: z.string(),
  isPrimary: z.boolean(),
  createdAt: z.date(),
  deletedAt: z.date().optional(),
  doctor: z.unknown(),
  address: z.unknown()
}));