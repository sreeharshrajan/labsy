import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

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
  deletedAt: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional(),
  customerId: SortOrderSchema.optional(),
  doctorId: SortOrderSchema.optional(),
  serviceId: SortOrderSchema.optional()
}).strict();
export const ReportInvoiceMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReportInvoiceMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceMaxOrderByAggregateInput>;
export const ReportInvoiceMaxOrderByAggregateInputObjectZodSchema = makeSchema();
