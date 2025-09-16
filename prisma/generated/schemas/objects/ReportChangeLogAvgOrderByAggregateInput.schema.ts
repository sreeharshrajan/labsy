import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  editVersion: SortOrderSchema.optional()
}).strict();
export const ReportChangeLogAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReportChangeLogAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportChangeLogAvgOrderByAggregateInput>;
export const ReportChangeLogAvgOrderByAggregateInputObjectZodSchema = makeSchema();
