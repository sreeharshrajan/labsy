import { z } from 'zod';

export const PaymentTypeSchema = z.enum(['CASH', 'UPI'])

export type PaymentType = z.infer<typeof PaymentTypeSchema>;