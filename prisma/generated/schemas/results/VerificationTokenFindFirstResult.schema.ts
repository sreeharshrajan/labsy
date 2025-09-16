import { z } from 'zod';
export const VerificationTokenFindFirstResultSchema = z.nullable(z.object({
  identifier: z.string(),
  expires: z.date(),
  token: z.string()
}));