import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  editVersion: SortOrderSchema.optional()
}).strict();
export const ReportChangeLogSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReportChangeLogSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportChangeLogSumOrderByAggregateInput>;
export const ReportChangeLogSumOrderByAggregateInputObjectZodSchema = makeSchema();
