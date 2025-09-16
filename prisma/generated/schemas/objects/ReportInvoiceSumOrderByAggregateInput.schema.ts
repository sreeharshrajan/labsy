import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  totalAmount: SortOrderSchema.optional(),
  discount: SortOrderSchema.optional(),
  netAmount: SortOrderSchema.optional()
}).strict();
export const ReportInvoiceSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReportInvoiceSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceSumOrderByAggregateInput>;
export const ReportInvoiceSumOrderByAggregateInputObjectZodSchema = makeSchema();
