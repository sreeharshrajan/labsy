import { z } from 'zod';
export const ReportChangeLogUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  reportId: z.string(),
  userId: z.string().optional(),
  changedById: z.string(),
  editVersion: z.number().int(),
  changes: z.unknown(),
  timestamp: z.date(),
  conflictResolved: z.boolean(),
  action: z.unknown(),
  User: z.unknown().optional(),
  changedBy: z.unknown(),
  report: z.unknown()
}));