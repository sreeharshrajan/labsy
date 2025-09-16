import { z } from 'zod';
export const SessionUpsertResultSchema = z.object({
  id: z.string(),
  userId: z.string(),
  expires: z.date(),
  sessionToken: z.string(),
  user: z.unknown()
});