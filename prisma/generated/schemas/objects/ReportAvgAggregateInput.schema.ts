import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  version: z.literal(true).optional()
}).strict();
export const ReportAvgAggregateInputObjectSchema: z.ZodType<Prisma.ReportAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReportAvgAggregateInputType>;
export const ReportAvgAggregateInputObjectZodSchema = makeSchema();
