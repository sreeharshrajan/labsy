import { z } from 'zod';
export const AddressFindManyResultSchema = z.object({
  data: z.array(z.object({
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