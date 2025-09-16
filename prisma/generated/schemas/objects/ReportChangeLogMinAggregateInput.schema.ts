import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  reportId: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  changedById: z.literal(true).optional(),
  editVersion: z.literal(true).optional(),
  timestamp: z.literal(true).optional(),
  conflictResolved: z.literal(true).optional(),
  action: z.literal(true).optional()
}).strict();
export const ReportChangeLogMinAggregateInputObjectSchema: z.ZodType<Prisma.ReportChangeLogMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReportChangeLogMinAggregateInputType>;
export const ReportChangeLogMinAggregateInputObjectZodSchema = makeSchema();
