import { z } from 'zod';

export const InvoiceStatusSchema = z.enum(['PAID', 'UNPAID', 'PARTIAL', 'CANCELLED'])

export type InvoiceStatus = z.infer<typeof InvoiceStatusSchema>;