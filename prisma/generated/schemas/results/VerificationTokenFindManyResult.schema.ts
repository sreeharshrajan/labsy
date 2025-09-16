import { z } from 'zod';
export const VerificationTokenFindManyResultSchema = z.object({
  data: z.array(z.object({
  identifier: z.string(),
  expires: z.date(),
  token: z.string()
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