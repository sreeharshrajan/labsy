import { z } from 'zod';

export const DoctorAddressScalarFieldEnumSchema = z.enum(['id', 'doctorId', 'addressId', 'isPrimary', 'createdAt', 'deletedAt'])

export type DoctorAddressScalarFieldEnum = z.infer<typeof DoctorAddressScalarFieldEnumSchema>;