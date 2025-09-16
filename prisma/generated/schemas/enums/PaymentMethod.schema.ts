import { z } from 'zod';

export const PaymentMethodSchema = z.enum(['CASH', 'BANK_TRANSFER', 'UPI'])

export type PaymentMethod = z.infer<typeof PaymentMethodSchema>;