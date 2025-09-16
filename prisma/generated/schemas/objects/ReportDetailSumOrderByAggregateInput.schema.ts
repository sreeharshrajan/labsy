import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  parameterReferenceMin: SortOrderSchema.optional(),
  parameterReferenceMax: SortOrderSchema.optional(),
  resultValue: SortOrderSchema.optional(),
  amount: SortOrderSchema.optional()
}).strict();
export const ReportDetailSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReportDetailSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailSumOrderByAggregateInput>;
export const ReportDetailSumOrderByAggregateInputObjectZodSchema = makeSchema();
