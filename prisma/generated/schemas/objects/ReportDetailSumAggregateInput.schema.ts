import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  parameterReferenceMin: z.literal(true).optional(),
  parameterReferenceMax: z.literal(true).optional(),
  resultValue: z.literal(true).optional(),
  amount: z.literal(true).optional()
}).strict();
export const ReportDetailSumAggregateInputObjectSchema: z.ZodType<Prisma.ReportDetailSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailSumAggregateInputType>;
export const ReportDetailSumAggregateInputObjectZodSchema = makeSchema();
