import { z } from 'zod';

// prettier-ignore
export const ReportDetailInputSchema = z.object({
    id: z.string(),
    parameterName: z.string().optional().nullable(),
    parameterUnit: z.string().optional().nullable(),
    parameterReferenceMin: z.number().optional().nullable(),
    parameterReferenceMax: z.number().optional().nullable(),
    resultText: z.string().optional().nullable(),
    resultValue: z.number().optional().nullable(),
    remarks: z.string().optional().nullable(),
    amount: z.number().optional().nullable(),
    createdAt: z.date(),
    lastEditedAt: z.date(),
    deletedAt: z.date().optional().nullable(),
    reportId: z.string(),
    parameterId: z.string(),
    report: z.unknown(),
    parameter: z.unknown(),
    serviceId: z.string().optional().nullable(),
    Service: z.unknown().optional().nullable(),
    reportTemplateId: z.string().optional().nullable(),
    ReportTemplate: z.unknown().optional().nullable(),
    DoctorCommissionLog: z.array(z.unknown())
}).strict();

export type ReportDetailInputType = z.infer<typeof ReportDetailInputSchema>;
