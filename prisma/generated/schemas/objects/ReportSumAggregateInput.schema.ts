import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  version: z.literal(true).optional()
}).strict();
export const ReportSumAggregateInputObjectSchema: z.ZodType<Prisma.ReportSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReportSumAggregateInputType>;
export const ReportSumAggregateInputObjectZodSchema = makeSchema();
