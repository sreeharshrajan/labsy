import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  version: SortOrderSchema.optional()
}).strict();
export const ReportAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReportAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportAvgOrderByAggregateInput>;
export const ReportAvgOrderByAggregateInputObjectZodSchema = makeSchema();
