import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  quantity: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  discount: SortOrderSchema.optional(),
  total: SortOrderSchema.optional()
}).strict();
export const ReportInvoiceItemAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReportInvoiceItemAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceItemAvgOrderByAggregateInput>;
export const ReportInvoiceItemAvgOrderByAggregateInputObjectZodSchema = makeSchema();
