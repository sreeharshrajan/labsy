import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ReportInvoiceItem: z.boolean().optional(),
  ReportDetail: z.boolean().optional(),
  ReportTemplate: z.boolean().optional(),
  ReportInvoice: z.boolean().optional()
}).strict();
export const ServiceCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ServiceCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCountOutputTypeSelect>;
export const ServiceCountOutputTypeSelectObjectZodSchema = makeSchema();
