import { z } from 'zod';

import { PaymentMethodSchema } from '../../enums/PaymentMethod.schema';
import { PaymentStatusSchema } from '../../enums/PaymentStatus.schema';
// prettier-ignore
export const ReportInvoicePaymentInputSchema = z.object({
    id: z.string(),
    amount: z.number(),
    method: PaymentMethodSchema,
    status: PaymentStatusSchema,
    referenceNo: z.string().optional().nullable(),
    transactionId: z.string().optional().nullable(),
    paidAt: z.date().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().optional().nullable(),
    invoiceId: z.string(),
    tenantId: z.string(),
    invoice: z.unknown(),
    tenant: z.unknown()
}).strict();

export type ReportInvoicePaymentInputType = z.infer<typeof ReportInvoicePaymentInputSchema>;
