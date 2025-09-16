import { z } from 'zod';

// prettier-ignore
export const ReportDetailModelSchema = z.object({
    id: z.string(),
    parameterName: z.string().nullable(),
    parameterUnit: z.string().nullable(),
    parameterReferenceMin: z.number().nullable(),
    parameterReferenceMax: z.number().nullable(),
    resultText: z.string().nullable(),
    resultValue: z.number().nullable(),
    remarks: z.string().nullable(),
    amount: z.number().nullable(),
    createdAt: z.date(),
    lastEditedAt: z.date(),
    deletedAt: z.date().nullable(),
    reportId: z.string(),
    parameterId: z.string(),
    report: z.unknown(),
    parameter: z.unknown(),
    serviceId: z.string().nullable(),
    Service: z.unknown().nullable(),
    reportTemplateId: z.string().nullable(),
    ReportTemplate: z.unknown().nullable(),
    DoctorCommissionLog: z.array(z.unknown())
}).strict();

export type ReportDetailModelType = z.infer<typeof ReportDetailModelSchema>;
