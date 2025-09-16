import { z } from 'zod';

export const DoctorCommissionStatusSchema = z.enum(['PENDING', 'PAID', 'FAILED'])

export type DoctorCommissionStatus = z.infer<typeof DoctorCommissionStatusSchema>;