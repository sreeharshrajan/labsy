import { z } from 'zod';
export const ReportChangeLogFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});