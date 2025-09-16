import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ReportChangeLogOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ReportChangeLogOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportChangeLogOrderByRelationAggregateInput>;
export const ReportChangeLogOrderByRelationAggregateInputObjectZodSchema = makeSchema();
