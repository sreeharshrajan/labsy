import { z } from 'zod';

import { GenderSchema } from '../../enums/Gender.schema';
// prettier-ignore
export const ReportParameterInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    unit: z.string().optional().nullable(),
    method: z.string().optional().nullable(),
    turnaroundTime: z.number().int().optional().nullable(),
    isCritical: z.boolean(),
    criticalLow: z.number().optional().nullable(),
    criticalHigh: z.number().optional().nullable(),
    genderSpecific: z.boolean(),
    ageSpecific: z.boolean(),
    notes: z.string().optional().nullable(),
    referenceMin: z.number().optional().nullable(),
    referenceMax: z.number().optional().nullable(),
    gender: GenderSchema.optional().nullable(),
    ageMin: z.number().int().optional().nullable(),
    ageMax: z.number().int().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().optional().nullable(),
    templateId: z.string(),
    template: z.unknown(),
    details: z.array(z.unknown())
}).strict();

export type ReportParameterInputType = z.infer<typeof ReportParameterInputSchema>;
