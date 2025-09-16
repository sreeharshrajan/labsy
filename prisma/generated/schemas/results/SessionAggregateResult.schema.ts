import { z } from 'zod';
export const SessionAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    userId: z.number(),
    expires: z.number(),
    sessionToken: z.number(),
    user: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    expires: z.date().nullable(),
    sessionToken: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    expires: z.date().nullable(),
    sessionToken: z.string().nullable()
  }).nullable().optional()});