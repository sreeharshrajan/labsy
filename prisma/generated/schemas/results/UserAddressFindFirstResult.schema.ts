import { z } from 'zod';
export const UserAddressFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  userId: z.string(),
  addressId: z.string(),
  isPrimary: z.boolean(),
  createdAt: z.date(),
  user: z.unknown(),
  address: z.unknown()
}));