import { z } from 'zod';

// prettier-ignore
export const ReportTemplateInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    unit: z.string().optional().nullable(),
    reference: z.string().optional().nullable(),
    notes: z.string().optional().nullable(),
    isActive: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().optional().nullable(),
    tenantId: z.string(),
    serviceId: z.string(),
    tenant: z.unknown(),
    service: z.unknown(),
    ReportDetails: z.array(z.unknown()),
    ReportParameter: z.array(z.unknown())
}).strict();

export type ReportTemplateInputType = z.infer<typeof ReportTemplateInputSchema>;
