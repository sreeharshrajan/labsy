import { z } from 'zod';

// prettier-ignore
export const AccountInputSchema = z.object({
    id: z.string(),
    userId: z.string(),
    expires_at: z.number().int().optional().nullable(),
    refresh_token_expires_in: z.number().int().optional().nullable(),
    type: z.string(),
    provider: z.string(),
    providerAccountId: z.string(),
    refresh_token: z.string().optional().nullable(),
    access_token: z.string().optional().nullable(),
    token_type: z.string().optional().nullable(),
    scope: z.string().optional().nullable(),
    id_token: z.string().optional().nullable(),
    session_state: z.string().optional().nullable(),
    user: z.unknown()
}).strict();

export type AccountInputType = z.infer<typeof AccountInputSchema>;
