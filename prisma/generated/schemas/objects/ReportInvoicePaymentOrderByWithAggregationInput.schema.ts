import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ReportInvoicePaymentCountOrderByAggregateInputObjectSchema } from './ReportInvoicePaymentCountOrderByAggregateInput.schema';
import { ReportInvoicePaymentAvgOrderByAggregateInputObjectSchema } from './ReportInvoicePaymentAvgOrderByAggregateInput.schema';
import { ReportInvoicePaymentMaxOrderByAggregateInputObjectSchema } from './ReportInvoicePaymentMaxOrderByAggregateInput.schema';
import { ReportInvoicePaymentMinOrderByAggregateInputObjectSchema } from './ReportInvoicePaymentMinOrderByAggregateInput.schema';
import { ReportInvoicePaymentSumOrderByAggregateInputObjectSchema } from './ReportInvoicePaymentSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  amount: SortOrderSchema.optional(),
  method: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  referenceNo: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  transactionId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  paidAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  invoiceId: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional(),
  _count: z.lazy(() => ReportInvoicePaymentCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ReportInvoicePaymentAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ReportInvoicePaymentMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ReportInvoicePaymentMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ReportInvoicePaymentSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ReportInvoicePaymentOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ReportInvoicePaymentOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoicePaymentOrderByWithAggregationInput>;
export const ReportInvoicePaymentOrderByWithAggregationInputObjectZodSchema = makeSchema();
