import { z } from 'zod';

// prettier-ignore
export const ServiceModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    code: z.string().nullable(),
    description: z.string().nullable(),
    price: z.number(),
    isActive: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
    tenantId: z.string(),
    categoryId: z.string().nullable(),
    Tenant: z.unknown(),
    Category: z.unknown().nullable(),
    ReportInvoiceItem: z.array(z.unknown()),
    ReportDetail: z.array(z.unknown()),
    ReportTemplate: z.array(z.unknown()),
    ReportInvoice: z.array(z.unknown())
}).strict();

export type ServiceModelType = z.infer<typeof ServiceModelSchema>;
