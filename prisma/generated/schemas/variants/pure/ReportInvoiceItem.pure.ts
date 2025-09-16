import { z } from 'zod';

// prettier-ignore
export const ReportInvoiceItemModelSchema = z.object({
    id: z.string(),
    quantity: z.number().int(),
    price: z.number(),
    discount: z.number(),
    total: z.number(),
    createdAt: z.date(),
    invoiceId: z.string(),
    serviceId: z.string(),
    invoice: z.unknown(),
    service: z.unknown()
}).strict();

export type ReportInvoiceItemModelType = z.infer<typeof ReportInvoiceItemModelSchema>;
