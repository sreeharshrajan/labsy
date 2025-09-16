import { z } from 'zod';

// prettier-ignore
export const VerificationTokenResultSchema = z.object({
    identifier: z.string(),
    expires: z.date(),
    token: z.string()
}).strict();

export type VerificationTokenResultType = z.infer<typeof VerificationTokenResultSchema>;
