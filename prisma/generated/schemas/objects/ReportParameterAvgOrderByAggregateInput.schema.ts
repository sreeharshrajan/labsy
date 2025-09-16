import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  turnaroundTime: SortOrderSchema.optional(),
  criticalLow: SortOrderSchema.optional(),
  criticalHigh: SortOrderSchema.optional(),
  referenceMin: SortOrderSchema.optional(),
  referenceMax: SortOrderSchema.optional(),
  ageMin: SortOrderSchema.optional(),
  ageMax: SortOrderSchema.optional()
}).strict();
export const ReportParameterAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReportParameterAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportParameterAvgOrderByAggregateInput>;
export const ReportParameterAvgOrderByAggregateInputObjectZodSchema = makeSchema();
