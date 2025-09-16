import { z } from 'zod';

export const PaymentStatusSchema = z.enum(['PENDING', 'PAID', 'FAILED'])

export type PaymentStatus = z.infer<typeof PaymentStatusSchema>;