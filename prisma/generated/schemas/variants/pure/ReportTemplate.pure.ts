import { z } from 'zod';

// prettier-ignore
export const ReportTemplateModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    unit: z.string().nullable(),
    reference: z.string().nullable(),
    notes: z.string().nullable(),
    isActive: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
    tenantId: z.string(),
    serviceId: z.string(),
    tenant: z.unknown(),
    service: z.unknown(),
    ReportDetails: z.array(z.unknown()),
    ReportParameter: z.array(z.unknown())
}).strict();

export type ReportTemplateModelType = z.infer<typeof ReportTemplateModelSchema>;
