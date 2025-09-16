import { z } from 'zod';
export const VerificationTokenUpsertResultSchema = z.object({
  identifier: z.string(),
  expires: z.date(),
  token: z.string()
});