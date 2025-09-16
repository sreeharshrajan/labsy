import { z } from 'zod';
export const VerificationTokenCreateResultSchema = z.object({
  identifier: z.string(),
  expires: z.date(),
  token: z.string()
});