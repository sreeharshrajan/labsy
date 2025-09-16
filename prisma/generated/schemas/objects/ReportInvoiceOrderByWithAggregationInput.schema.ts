import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ReportInvoiceCountOrderByAggregateInputObjectSchema } from './ReportInvoiceCountOrderByAggregateInput.schema';
import { ReportInvoiceAvgOrderByAggregateInputObjectSchema } from './ReportInvoiceAvgOrderByAggregateInput.schema';
import { ReportInvoiceMaxOrderByAggregateInputObjectSchema } from './ReportInvoiceMaxOrderByAggregateInput.schema';
import { ReportInvoiceMinOrderByAggregateInputObjectSchema } from './ReportInvoiceMinOrderByAggregateInput.schema';
import { ReportInvoiceSumOrderByAggregateInputObjectSchema } from './ReportInvoiceSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  totalAmount: SortOrderSchema.optional(),
  discount: SortOrderSchema.optional(),
  netAmount: SortOrderSchema.optional(),
  paymentType: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  issuedAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tenantId: SortOrderSchema.optional(),
  customerId: SortOrderSchema.optional(),
  doctorId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  serviceId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => ReportInvoiceCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ReportInvoiceAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ReportInvoiceMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ReportInvoiceMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ReportInvoiceSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ReportInvoiceOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ReportInvoiceOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceOrderByWithAggregationInput>;
export const ReportInvoiceOrderByWithAggregationInputObjectZodSchema = makeSchema();
