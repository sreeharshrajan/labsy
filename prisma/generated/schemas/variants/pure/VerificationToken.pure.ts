import { z } from 'zod';

// prettier-ignore
export const VerificationTokenModelSchema = z.object({
    identifier: z.string(),
    expires: z.date(),
    token: z.string()
}).strict();

export type VerificationTokenModelType = z.infer<typeof VerificationTokenModelSchema>;
