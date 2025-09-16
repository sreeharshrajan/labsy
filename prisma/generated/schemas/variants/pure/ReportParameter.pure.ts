import { z } from 'zod';

import { GenderSchema } from '../../enums/Gender.schema';
// prettier-ignore
export const ReportParameterModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    unit: z.string().nullable(),
    method: z.string().nullable(),
    turnaroundTime: z.number().int().nullable(),
    isCritical: z.boolean(),
    criticalLow: z.number().nullable(),
    criticalHigh: z.number().nullable(),
    genderSpecific: z.boolean(),
    ageSpecific: z.boolean(),
    notes: z.string().nullable(),
    referenceMin: z.number().nullable(),
    referenceMax: z.number().nullable(),
    gender: GenderSchema.nullable(),
    ageMin: z.number().int().nullable(),
    ageMax: z.number().int().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
    templateId: z.string(),
    template: z.unknown(),
    details: z.array(z.unknown())
}).strict();

export type ReportParameterModelType = z.infer<typeof ReportParameterModelSchema>;
