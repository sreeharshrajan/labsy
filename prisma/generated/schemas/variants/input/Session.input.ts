import { z } from 'zod';

// prettier-ignore
export const SessionInputSchema = z.object({
    id: z.string(),
    userId: z.string(),
    expires: z.date(),
    sessionToken: z.string(),
    user: z.unknown()
}).strict();

export type SessionInputType = z.infer<typeof SessionInputSchema>;
