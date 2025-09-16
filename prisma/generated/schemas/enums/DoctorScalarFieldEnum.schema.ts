import { z } from 'zod';

export const DoctorScalarFieldEnumSchema = z.enum(['id', 'name', 'specialization', 'email', 'phone', 'registrationNo', 'clinicName', 'department', 'status', 'createdAt', 'updatedAt', 'deletedAt', 'tenantId'])

export type DoctorScalarFieldEnum = z.infer<typeof DoctorScalarFieldEnumSchema>;