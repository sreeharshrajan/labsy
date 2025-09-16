import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  DoctorCommissionLog: z.boolean().optional()
}).strict();
export const ReportDetailCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ReportDetailCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailCountOutputTypeSelect>;
export const ReportDetailCountOutputTypeSelectObjectZodSchema = makeSchema();
