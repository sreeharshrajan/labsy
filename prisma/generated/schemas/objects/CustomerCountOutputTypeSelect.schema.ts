import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ReportInvoice: z.boolean().optional(),
  Report: z.boolean().optional(),
  customerAddresses: z.boolean().optional()
}).strict();
export const CustomerCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.CustomerCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.CustomerCountOutputTypeSelect>;
export const CustomerCountOutputTypeSelectObjectZodSchema = makeSchema();
