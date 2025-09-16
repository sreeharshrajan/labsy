import { z } from 'zod';

// prettier-ignore
export const AccountModelSchema = z.object({
    id: z.string(),
    userId: z.string(),
    expires_at: z.number().int().nullable(),
    refresh_token_expires_in: z.number().int().nullable(),
    type: z.string(),
    provider: z.string(),
    providerAccountId: z.string(),
    refresh_token: z.string().nullable(),
    access_token: z.string().nullable(),
    token_type: z.string().nullable(),
    scope: z.string().nullable(),
    id_token: z.string().nullable(),
    session_state: z.string().nullable(),
    user: z.unknown()
}).strict();

export type AccountModelType = z.infer<typeof AccountModelSchema>;
