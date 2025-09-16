import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  details: z.boolean().optional(),
  updateLog: z.boolean().optional()
}).strict();
export const ReportCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ReportCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ReportCountOutputTypeSelect>;
export const ReportCountOutputTypeSelectObjectZodSchema = makeSchema();
