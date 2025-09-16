import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  reportId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  changedById: SortOrderSchema.optional(),
  editVersion: SortOrderSchema.optional(),
  timestamp: SortOrderSchema.optional(),
  conflictResolved: SortOrderSchema.optional(),
  action: SortOrderSchema.optional()
}).strict();
export const ReportChangeLogMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReportChangeLogMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportChangeLogMaxOrderByAggregateInput>;
export const ReportChangeLogMaxOrderByAggregateInputObjectZodSchema = makeSchema();
