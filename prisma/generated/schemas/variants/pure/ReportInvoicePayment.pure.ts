import { z } from 'zod';

import { PaymentMethodSchema } from '../../enums/PaymentMethod.schema';
import { PaymentStatusSchema } from '../../enums/PaymentStatus.schema';
// prettier-ignore
export const ReportInvoicePaymentModelSchema = z.object({
    id: z.string(),
    amount: z.number(),
    method: PaymentMethodSchema,
    status: PaymentStatusSchema,
    referenceNo: z.string().nullable(),
    transactionId: z.string().nullable(),
    paidAt: z.date().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
    invoiceId: z.string(),
    tenantId: z.string(),
    invoice: z.unknown(),
    tenant: z.unknown()
}).strict();

export type ReportInvoicePaymentModelType = z.infer<typeof ReportInvoicePaymentModelSchema>;
