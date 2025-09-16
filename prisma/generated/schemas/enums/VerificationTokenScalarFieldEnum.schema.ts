import { z } from 'zod';

export const VerificationTokenScalarFieldEnumSchema = z.enum(['identifier', 'expires', 'token'])

export type VerificationTokenScalarFieldEnum = z.infer<typeof VerificationTokenScalarFieldEnumSchema>;