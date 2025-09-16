import { z } from 'zod';

import { PaymentTypeSchema } from '../../enums/PaymentType.schema';
import { InvoiceStatusSchema } from '../../enums/InvoiceStatus.schema';
// prettier-ignore
export const ReportInvoiceResultSchema = z.object({
    id: z.string(),
    totalAmount: z.number(),
    discount: z.number(),
    netAmount: z.number(),
    paymentType: PaymentTypeSchema,
    status: InvoiceStatusSchema,
    issuedAt: z.date(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
    tenantId: z.string(),
    customerId: z.string(),
    doctorId: z.string().nullable(),
    tenant: z.unknown(),
    customer: z.unknown(),
    doctor: z.unknown().nullable(),
    items: z.array(z.unknown()),
    payments: z.array(z.unknown()),
    logs: z.array(z.unknown()),
    Report: z.array(z.unknown()),
    Service: z.unknown().nullable(),
    serviceId: z.string().nullable()
}).strict();

export type ReportInvoiceResultType = z.infer<typeof ReportInvoiceResultSchema>;
