import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ReportDetails: z.boolean().optional(),
  ReportParameter: z.boolean().optional()
}).strict();
export const ReportTemplateCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ReportTemplateCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateCountOutputTypeSelect>;
export const ReportTemplateCountOutputTypeSelectObjectZodSchema = makeSchema();
