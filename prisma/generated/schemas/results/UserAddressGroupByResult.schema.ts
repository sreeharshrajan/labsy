import { z } from 'zod';
export const UserAddressGroupByResultSchema = z.array(z.object({
  id: z.string(),
  userId: z.string(),
  addressId: z.string(),
  isPrimary: z.boolean(),
  createdAt: z.date(),
  _count: z.object({
    id: z.number(),
    userId: z.number(),
    addressId: z.number(),
    isPrimary: z.number(),
    createdAt: z.number(),
    user: z.number(),
    address: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    addressId: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    addressId: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()
}));