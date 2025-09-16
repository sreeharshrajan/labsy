import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ReportDetailCountOrderByAggregateInputObjectSchema } from './ReportDetailCountOrderByAggregateInput.schema';
import { ReportDetailAvgOrderByAggregateInputObjectSchema } from './ReportDetailAvgOrderByAggregateInput.schema';
import { ReportDetailMaxOrderByAggregateInputObjectSchema } from './ReportDetailMaxOrderByAggregateInput.schema';
import { ReportDetailMinOrderByAggregateInputObjectSchema } from './ReportDetailMinOrderByAggregateInput.schema';
import { ReportDetailSumOrderByAggregateInputObjectSchema } from './ReportDetailSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  parameterName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  parameterUnit: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  parameterReferenceMin: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  parameterReferenceMax: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  resultText: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  resultValue: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  remarks: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  amount: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  lastEditedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  reportId: SortOrderSchema.optional(),
  parameterId: SortOrderSchema.optional(),
  serviceId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  reportTemplateId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => ReportDetailCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ReportDetailAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ReportDetailMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ReportDetailMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ReportDetailSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ReportDetailOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ReportDetailOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailOrderByWithAggregationInput>;
export const ReportDetailOrderByWithAggregationInputObjectZodSchema = makeSchema();
