import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  details: z.boolean().optional()
}).strict();
export const ReportParameterCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ReportParameterCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ReportParameterCountOutputTypeSelect>;
export const ReportParameterCountOutputTypeSelectObjectZodSchema = makeSchema();
