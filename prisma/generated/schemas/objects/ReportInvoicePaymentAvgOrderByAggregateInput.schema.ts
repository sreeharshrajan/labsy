import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  amount: SortOrderSchema.optional()
}).strict();
export const ReportInvoicePaymentAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReportInvoicePaymentAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoicePaymentAvgOrderByAggregateInput>;
export const ReportInvoicePaymentAvgOrderByAggregateInputObjectZodSchema = makeSchema();
