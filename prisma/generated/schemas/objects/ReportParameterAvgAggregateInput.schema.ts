import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  turnaroundTime: z.literal(true).optional(),
  criticalLow: z.literal(true).optional(),
  criticalHigh: z.literal(true).optional(),
  referenceMin: z.literal(true).optional(),
  referenceMax: z.literal(true).optional(),
  ageMin: z.literal(true).optional(),
  ageMax: z.literal(true).optional()
}).strict();
export const ReportParameterAvgAggregateInputObjectSchema: z.ZodType<Prisma.ReportParameterAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReportParameterAvgAggregateInputType>;
export const ReportParameterAvgAggregateInputObjectZodSchema = makeSchema();
