import { z } from 'zod';

export const DoctorStatusSchema = z.enum(['ACTIVE', 'INACTIVE'])

export type DoctorStatus = z.infer<typeof DoctorStatusSchema>;