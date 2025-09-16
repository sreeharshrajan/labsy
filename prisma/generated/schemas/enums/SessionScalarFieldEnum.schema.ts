import { z } from 'zod';

export const SessionScalarFieldEnumSchema = z.enum(['id', 'userId', 'expires', 'sessionToken'])

export type SessionScalarFieldEnum = z.infer<typeof SessionScalarFieldEnumSchema>;