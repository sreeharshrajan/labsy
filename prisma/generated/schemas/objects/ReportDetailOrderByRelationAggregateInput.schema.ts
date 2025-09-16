import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ReportDetailOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ReportDetailOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailOrderByRelationAggregateInput>;
export const ReportDetailOrderByRelationAggregateInputObjectZodSchema = makeSchema();
