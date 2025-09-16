import { z } from 'zod';

export const AccountScalarFieldEnumSchema = z.enum(['id', 'userId', 'expires_at', 'refresh_token_expires_in', 'type', 'provider', 'providerAccountId', 'refresh_token', 'access_token', 'token_type', 'scope', 'id_token', 'session_state'])

export type AccountScalarFieldEnum = z.infer<typeof AccountScalarFieldEnumSchema>;