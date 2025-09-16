import { z } from 'zod';

// prettier-ignore
export const SessionModelSchema = z.object({
    id: z.string(),
    userId: z.string(),
    expires: z.date(),
    sessionToken: z.string(),
    user: z.unknown()
}).strict();

export type SessionModelType = z.infer<typeof SessionModelSchema>;
