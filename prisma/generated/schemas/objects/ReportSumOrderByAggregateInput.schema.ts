import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  version: SortOrderSchema.optional()
}).strict();
export const ReportSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReportSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportSumOrderByAggregateInput>;
export const ReportSumOrderByAggregateInputObjectZodSchema = makeSchema();
