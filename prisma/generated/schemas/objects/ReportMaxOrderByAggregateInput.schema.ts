import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  reportCode: SortOrderSchema.optional(),
  fileUrl: SortOrderSchema.optional(),
  collectedPlace: SortOrderSchema.optional(),
  notes: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  customerType: SortOrderSchema.optional(),
  issuedAt: SortOrderSchema.optional(),
  collectedAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional(),
  version: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional(),
  customerId: SortOrderSchema.optional(),
  doctorId: SortOrderSchema.optional(),
  invoiceId: SortOrderSchema.optional(),
  createdBy: SortOrderSchema.optional(),
  collectedBy: SortOrderSchema.optional(),
  customerAddressId: SortOrderSchema.optional(),
  labAddressId: SortOrderSchema.optional()
}).strict();
export const ReportMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReportMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportMaxOrderByAggregateInput>;
export const ReportMaxOrderByAggregateInputObjectZodSchema = makeSchema();
