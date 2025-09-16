import { z } from 'zod';
export const CustomerAddressDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  customerId: z.string(),
  addressId: z.string(),
  isPrimary: z.boolean(),
  createdAt: z.date(),
  customer: z.unknown(),
  address: z.unknown(),
  Report: z.array(z.unknown())
}));