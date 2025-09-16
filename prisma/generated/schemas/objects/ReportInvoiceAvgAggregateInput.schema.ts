import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  totalAmount: z.literal(true).optional(),
  discount: z.literal(true).optional(),
  netAmount: z.literal(true).optional()
}).strict();
export const ReportInvoiceAvgAggregateInputObjectSchema: z.ZodType<Prisma.ReportInvoiceAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceAvgAggregateInputType>;
export const ReportInvoiceAvgAggregateInputObjectZodSchema = makeSchema();
