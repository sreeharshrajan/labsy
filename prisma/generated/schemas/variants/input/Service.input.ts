import { z } from 'zod';

// prettier-ignore
export const ServiceInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    code: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    price: z.number(),
    isActive: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().optional().nullable(),
    tenantId: z.string(),
    categoryId: z.string().optional().nullable(),
    Tenant: z.unknown(),
    Category: z.unknown().optional().nullable(),
    ReportInvoiceItem: z.array(z.unknown()),
    ReportDetail: z.array(z.unknown()),
    ReportTemplate: z.array(z.unknown()),
    ReportInvoice: z.array(z.unknown())
}).strict();

export type ServiceInputType = z.infer<typeof ServiceInputSchema>;
