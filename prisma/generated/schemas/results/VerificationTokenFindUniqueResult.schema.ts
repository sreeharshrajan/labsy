import { z } from 'zod';
export const VerificationTokenFindUniqueResultSchema = z.nullable(z.object({
  identifier: z.string(),
  expires: z.date(),
  token: z.string()
}));