import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ReportParameterCountOrderByAggregateInputObjectSchema } from './ReportParameterCountOrderByAggregateInput.schema';
import { ReportParameterAvgOrderByAggregateInputObjectSchema } from './ReportParameterAvgOrderByAggregateInput.schema';
import { ReportParameterMaxOrderByAggregateInputObjectSchema } from './ReportParameterMaxOrderByAggregateInput.schema';
import { ReportParameterMinOrderByAggregateInputObjectSchema } from './ReportParameterMinOrderByAggregateInput.schema';
import { ReportParameterSumOrderByAggregateInputObjectSchema } from './ReportParameterSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  unit: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  method: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  turnaroundTime: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isCritical: SortOrderSchema.optional(),
  criticalLow: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  criticalHigh: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  genderSpecific: SortOrderSchema.optional(),
  ageSpecific: SortOrderSchema.optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  referenceMin: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  referenceMax: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  gender: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ageMin: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ageMax: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  templateId: SortOrderSchema.optional(),
  _count: z.lazy(() => ReportParameterCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ReportParameterAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ReportParameterMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ReportParameterMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ReportParameterSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ReportParameterOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ReportParameterOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportParameterOrderByWithAggregationInput>;
export const ReportParameterOrderByWithAggregationInputObjectZodSchema = makeSchema();
