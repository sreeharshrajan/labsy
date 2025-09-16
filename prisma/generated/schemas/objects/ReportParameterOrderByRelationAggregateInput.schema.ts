import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ReportParameterOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ReportParameterOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportParameterOrderByRelationAggregateInput>;
export const ReportParameterOrderByRelationAggregateInputObjectZodSchema = makeSchema();
