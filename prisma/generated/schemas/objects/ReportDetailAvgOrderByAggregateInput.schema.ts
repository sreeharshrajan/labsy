import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  parameterReferenceMin: SortOrderSchema.optional(),
  parameterReferenceMax: SortOrderSchema.optional(),
  resultValue: SortOrderSchema.optional(),
  amount: SortOrderSchema.optional()
}).strict();
export const ReportDetailAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReportDetailAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailAvgOrderByAggregateInput>;
export const ReportDetailAvgOrderByAggregateInputObjectZodSchema = makeSchema();
