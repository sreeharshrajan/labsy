import { z } from 'zod';
export const CustomerAddressAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    customerId: z.number(),
    addressId: z.number(),
    isPrimary: z.number(),
    createdAt: z.number(),
    customer: z.number(),
    address: z.number(),
    Report: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    customerId: z.string().nullable(),
    addressId: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    customerId: z.string().nullable(),
    addressId: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()});