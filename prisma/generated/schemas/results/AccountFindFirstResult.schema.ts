import { z } from 'zod';
export const AccountFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  userId: z.string(),
  expires_at: z.number().int().optional(),
  refresh_token_expires_in: z.number().int().optional(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional(),
  access_token: z.string().optional(),
  token_type: z.string().optional(),
  scope: z.string().optional(),
  id_token: z.string().optional(),
  session_state: z.string().optional(),
  user: z.unknown()
}));