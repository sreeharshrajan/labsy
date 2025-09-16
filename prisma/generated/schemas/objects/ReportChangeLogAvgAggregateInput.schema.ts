import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  editVersion: z.literal(true).optional()
}).strict();
export const ReportChangeLogAvgAggregateInputObjectSchema: z.ZodType<Prisma.ReportChangeLogAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReportChangeLogAvgAggregateInputType>;
export const ReportChangeLogAvgAggregateInputObjectZodSchema = makeSchema();
