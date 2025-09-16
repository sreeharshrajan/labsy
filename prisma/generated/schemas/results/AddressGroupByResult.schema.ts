import { z } from 'zod';
export const AddressGroupByResultSchema = z.array(z.object({
  id: z.string(),
  line1: z.string(),
  line2: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  country: z.string(),
  createdAt: z.date(),
  _count: z.object({
    id: z.number(),
    line1: z.number(),
    line2: z.number(),
    city: z.number(),
    state: z.number(),
    zip: z.number(),
    country: z.number(),
    createdAt: z.number(),
    tenantAddresses: z.number(),
    userAddresses: z.number(),
    customerAddresses: z.number(),
    doctorAddresses: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    line1: z.string().nullable(),
    line2: z.string().nullable(),
    city: z.string().nullable(),
    state: z.string().nullable(),
    zip: z.string().nullable(),
    country: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    line1: z.string().nullable(),
    line2: z.string().nullable(),
    city: z.string().nullable(),
    state: z.string().nullable(),
    zip: z.string().nullable(),
    country: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()
}));