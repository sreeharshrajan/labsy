import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  discount: SortOrderSchema.optional(),
  total: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  invoiceId: SortOrderSchema.optional(),
  serviceId: SortOrderSchema.optional()
}).strict();
export const ReportInvoiceItemCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReportInvoiceItemCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceItemCountOrderByAggregateInput>;
export const ReportInvoiceItemCountOrderByAggregateInputObjectZodSchema = makeSchema();
