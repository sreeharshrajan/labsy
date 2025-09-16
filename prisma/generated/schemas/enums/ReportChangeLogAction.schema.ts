import { z } from 'zod';

export const ReportChangeLogActionSchema = z.enum(['CREATED', 'UPDATED', 'APPROVED', 'REJECTED'])

export type ReportChangeLogAction = z.infer<typeof ReportChangeLogActionSchema>;