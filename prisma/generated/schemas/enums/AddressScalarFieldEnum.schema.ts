import { z } from 'zod';

export const AddressScalarFieldEnumSchema = z.enum(['id', 'line1', 'line2', 'city', 'state', 'zip', 'country', 'createdAt'])

export type AddressScalarFieldEnum = z.infer<typeof AddressScalarFieldEnumSchema>;