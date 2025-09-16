import { z } from 'zod';
export const VerificationTokenGroupByResultSchema = z.array(z.object({
  identifier: z.string(),
  expires: z.date(),
  token: z.string(),
  _count: z.object({
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
  }).nullable().optional()
}));