import { z } from 'zod';
export const AddressFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  line1: z.string(),
  line2: z.string().optional(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  country: z.string(),
  createdAt: z.date(),
  tenantAddresses: z.array(z.unknown()),
  userAddresses: z.array(z.unknown()),
  customerAddresses: z.array(z.unknown()),
  doctorAddresses: z.array(z.unknown())
}));