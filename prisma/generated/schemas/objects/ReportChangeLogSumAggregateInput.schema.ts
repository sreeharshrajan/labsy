import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  editVersion: z.literal(true).optional()
}).strict();
export const ReportChangeLogSumAggregateInputObjectSchema: z.ZodType<Prisma.ReportChangeLogSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReportChangeLogSumAggregateInputType>;
export const ReportChangeLogSumAggregateInputObjectZodSchema = makeSchema();
