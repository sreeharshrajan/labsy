import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ReportInvoiceOrderByWithRelationInputObjectSchema } from './ReportInvoiceOrderByWithRelationInput.schema';
import { TenantOrderByWithRelationInputObjectSchema } from './TenantOrderByWithRelationInput.schema'

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
  invoice: z.lazy(() => ReportInvoiceOrderByWithRelationInputObjectSchema).optional(),
  tenant: z.lazy(() => TenantOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ReportInvoicePaymentOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ReportInvoicePaymentOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoicePaymentOrderByWithRelationInput>;
export const ReportInvoicePaymentOrderByWithRelationInputObjectZodSchema = makeSchema();
