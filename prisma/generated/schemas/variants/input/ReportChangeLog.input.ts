import { z } from 'zod';

import { ReportChangeLogActionSchema } from '../../enums/ReportChangeLogAction.schema';
// prettier-ignore
export const ReportChangeLogInputSchema = z.object({
    id: z.string(),
    reportId: z.string(),
    userId: z.string().optional().nullable(),
    changedById: z.string(),
    editVersion: z.number().int(),
    changes: z.unknown(),
    timestamp: z.date(),
    conflictResolved: z.boolean(),
    action: ReportChangeLogActionSchema,
    User: z.unknown().optional().nullable(),
    changedBy: z.unknown(),
    report: z.unknown()
}).strict();

export type ReportChangeLogInputType = z.infer<typeof ReportChangeLogInputSchema>;
