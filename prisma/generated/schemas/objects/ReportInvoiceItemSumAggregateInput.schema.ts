import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  quantity: z.literal(true).optional(),
  price: z.literal(true).optional(),
  discount: z.literal(true).optional(),
  total: z.literal(true).optional()
}).strict();
export const ReportInvoiceItemSumAggregateInputObjectSchema: z.ZodType<Prisma.ReportInvoiceItemSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceItemSumAggregateInputType>;
export const ReportInvoiceItemSumAggregateInputObjectZodSchema = makeSchema();
