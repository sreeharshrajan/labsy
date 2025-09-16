import { z } from 'zod';

export const ReportStatusSchema = z.enum(['PENDING', 'PROCESSING', 'COMPLETED', 'DELIVERED'])

export type ReportStatus = z.infer<typeof ReportStatusSchema>;