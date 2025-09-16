import { z } from 'zod';

export const DoctorCommissionLogScalarFieldEnumSchema = z.enum(['id', 'doctorId', 'invoiceId', 'commissionId', 'reportDetailId', 'commissionAmt', 'commissionStatus', 'createdAt', 'updatedAt'])

export type DoctorCommissionLogScalarFieldEnum = z.infer<typeof DoctorCommissionLogScalarFieldEnumSchema>;