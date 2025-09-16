import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ReportChangeLogCountOrderByAggregateInputObjectSchema } from './ReportChangeLogCountOrderByAggregateInput.schema';
import { ReportChangeLogAvgOrderByAggregateInputObjectSchema } from './ReportChangeLogAvgOrderByAggregateInput.schema';
import { ReportChangeLogMaxOrderByAggregateInputObjectSchema } from './ReportChangeLogMaxOrderByAggregateInput.schema';
import { ReportChangeLogMinOrderByAggregateInputObjectSchema } from './ReportChangeLogMinOrderByAggregateInput.schema';
import { ReportChangeLogSumOrderByAggregateInputObjectSchema } from './ReportChangeLogSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  reportId: SortOrderSchema.optional(),
  userId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  changedById: SortOrderSchema.optional(),
  editVersion: SortOrderSchema.optional(),
  changes: SortOrderSchema.optional(),
  timestamp: SortOrderSchema.optional(),
  conflictResolved: SortOrderSchema.optional(),
  action: SortOrderSchema.optional(),
  _count: z.lazy(() => ReportChangeLogCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ReportChangeLogAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ReportChangeLogMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ReportChangeLogMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ReportChangeLogSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ReportChangeLogOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ReportChangeLogOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportChangeLogOrderByWithAggregationInput>;
export const ReportChangeLogOrderByWithAggregationInputObjectZodSchema = makeSchema();
