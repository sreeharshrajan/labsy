import { z } from 'zod';

import { ReportChangeLogActionSchema } from '../../enums/ReportChangeLogAction.schema';
// prettier-ignore
export const ReportChangeLogResultSchema = z.object({
    id: z.string(),
    reportId: z.string(),
    userId: z.string().nullable(),
    changedById: z.string(),
    editVersion: z.number().int(),
    changes: z.unknown(),
    timestamp: z.date(),
    conflictResolved: z.boolean(),
    action: ReportChangeLogActionSchema,
    User: z.unknown().nullable(),
    changedBy: z.unknown(),
    report: z.unknown()
}).strict();

export type ReportChangeLogResultType = z.infer<typeof ReportChangeLogResultSchema>;
