import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ReportInvoiceItemCountOrderByAggregateInputObjectSchema } from './ReportInvoiceItemCountOrderByAggregateInput.schema';
import { ReportInvoiceItemAvgOrderByAggregateInputObjectSchema } from './ReportInvoiceItemAvgOrderByAggregateInput.schema';
import { ReportInvoiceItemMaxOrderByAggregateInputObjectSchema } from './ReportInvoiceItemMaxOrderByAggregateInput.schema';
import { ReportInvoiceItemMinOrderByAggregateInputObjectSchema } from './ReportInvoiceItemMinOrderByAggregateInput.schema';
import { ReportInvoiceItemSumOrderByAggregateInputObjectSchema } from './ReportInvoiceItemSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  discount: SortOrderSchema.optional(),
  total: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  invoiceId: SortOrderSchema.optional(),
  serviceId: SortOrderSchema.optional(),
  _count: z.lazy(() => ReportInvoiceItemCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ReportInvoiceItemAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ReportInvoiceItemMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ReportInvoiceItemMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ReportInvoiceItemSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ReportInvoiceItemOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ReportInvoiceItemOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceItemOrderByWithAggregationInput>;
export const ReportInvoiceItemOrderByWithAggregationInputObjectZodSchema = makeSchema();
