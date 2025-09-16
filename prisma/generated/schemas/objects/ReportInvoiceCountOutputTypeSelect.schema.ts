import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  items: z.boolean().optional(),
  payments: z.boolean().optional(),
  logs: z.boolean().optional(),
  Report: z.boolean().optional()
}).strict();
export const ReportInvoiceCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ReportInvoiceCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceCountOutputTypeSelect>;
export const ReportInvoiceCountOutputTypeSelectObjectZodSchema = makeSchema();
