import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  amount: z.literal(true).optional()
}).strict();
export const ReportInvoicePaymentAvgAggregateInputObjectSchema: z.ZodType<Prisma.ReportInvoicePaymentAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoicePaymentAvgAggregateInputType>;
export const ReportInvoicePaymentAvgAggregateInputObjectZodSchema = makeSchema();
