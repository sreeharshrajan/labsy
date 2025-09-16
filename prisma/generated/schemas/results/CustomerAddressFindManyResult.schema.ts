import { z } from 'zod';
export const CustomerAddressFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  customerId: z.string(),
  addressId: z.string(),
  isPrimary: z.boolean(),
  createdAt: z.date(),
  customer: z.unknown(),
  address: z.unknown(),
  Report: z.array(z.unknown())
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