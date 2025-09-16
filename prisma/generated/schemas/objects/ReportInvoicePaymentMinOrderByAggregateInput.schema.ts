import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  amount: SortOrderSchema.optional(),
  method: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  referenceNo: SortOrderSchema.optional(),
  transactionId: SortOrderSchema.optional(),
  paidAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional(),
  invoiceId: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional()
}).strict();
export const ReportInvoicePaymentMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReportInvoicePaymentMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoicePaymentMinOrderByAggregateInput>;
export const ReportInvoicePaymentMinOrderByAggregateInputObjectZodSchema = makeSchema();
