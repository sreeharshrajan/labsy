import { z } from 'zod';
export const SessionGroupByResultSchema = z.array(z.object({
  id: z.string(),
  userId: z.string(),
  expires: z.date(),
  sessionToken: z.string(),
  _count: z.object({
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
  }).nullable().optional()
}));