import { z } from 'zod';

export const CustomerAddressScalarFieldEnumSchema = z.enum(['id', 'customerId', 'addressId', 'isPrimary', 'createdAt'])

export type CustomerAddressScalarFieldEnum = z.infer<typeof CustomerAddressScalarFieldEnumSchema>;