import { z } from 'zod';

// prettier-ignore
export const VerificationTokenInputSchema = z.object({
    identifier: z.string(),
    expires: z.date(),
    token: z.string()
}).strict();

export type VerificationTokenInputType = z.infer<typeof VerificationTokenInputSchema>;
