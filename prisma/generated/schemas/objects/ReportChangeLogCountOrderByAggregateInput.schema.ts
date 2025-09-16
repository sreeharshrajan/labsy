import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  reportId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  changedById: SortOrderSchema.optional(),
  editVersion: SortOrderSchema.optional(),
  changes: SortOrderSchema.optional(),
  timestamp: SortOrderSchema.optional(),
  conflictResolved: SortOrderSchema.optional(),
  action: SortOrderSchema.optional()
}).strict();
export const ReportChangeLogCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReportChangeLogCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportChangeLogCountOrderByAggregateInput>;
export const ReportChangeLogCountOrderByAggregateInputObjectZodSchema = makeSchema();
