import { z } from 'zod';

export const UserAddressScalarFieldEnumSchema = z.enum(['id', 'userId', 'addressId', 'isPrimary', 'createdAt'])

export type UserAddressScalarFieldEnum = z.infer<typeof UserAddressScalarFieldEnumSchema>;