import { z } from 'zod';

export const DoctorCommissionScalarFieldEnumSchema = z.enum(['id', 'commissionType', 'value', 'isActive', 'notes', 'createdAt', 'updatedAt', 'deletedAt', 'doctorId'])

export type DoctorCommissionScalarFieldEnum = z.infer<typeof DoctorCommissionScalarFieldEnumSchema>;