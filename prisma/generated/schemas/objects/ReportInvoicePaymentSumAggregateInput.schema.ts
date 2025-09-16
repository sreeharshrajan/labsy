import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  amount: z.literal(true).optional()
}).strict();
export const ReportInvoicePaymentSumAggregateInputObjectSchema: z.ZodType<Prisma.ReportInvoicePaymentSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoicePaymentSumAggregateInputType>;
export const ReportInvoicePaymentSumAggregateInputObjectZodSchema = makeSchema();
