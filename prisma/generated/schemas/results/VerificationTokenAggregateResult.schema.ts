import { z } from 'zod';
export const VerificationTokenAggregateResultSchema = z.object({  _count: z.object({
    identifier: z.number(),
    expires: z.number(),
    token: z.number()
  }).optional(),
  _min: z.object({
    identifier: z.string().nullable(),
    expires: z.date().nullable(),
    token: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    identifier: z.string().nullable(),
    expires: z.date().nullable(),
    token: z.string().nullable()
  }).nullable().optional()});