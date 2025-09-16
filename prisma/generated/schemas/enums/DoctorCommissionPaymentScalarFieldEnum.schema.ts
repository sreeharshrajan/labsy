import { z } from 'zod';

export const DoctorCommissionPaymentScalarFieldEnumSchema = z.enum(['id', 'amount', 'paymentDate', 'paymentMethod', 'referenceNo', 'status', 'notes', 'createdAt', 'updatedAt', 'deletedAt', 'doctorId'])

export type DoctorCommissionPaymentScalarFieldEnum = z.infer<typeof DoctorCommissionPaymentScalarFieldEnumSchema>;