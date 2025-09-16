import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'userTitle', 'name', 'email', 'image', 'passwordHash', 'phone', 'isSuperAdmin', 'status', 'dateOfBirth', 'createdAt', 'updatedAt', 'deletedAt'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;