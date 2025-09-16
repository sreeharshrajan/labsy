import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ReportInvoiceOrderByWithRelationInputObjectSchema } from './ReportInvoiceOrderByWithRelationInput.schema';
import { ServiceOrderByWithRelationInputObjectSchema } from './ServiceOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  discount: SortOrderSchema.optional(),
  total: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  invoiceId: SortOrderSchema.optional(),
  serviceId: SortOrderSchema.optional(),
  invoice: z.lazy(() => ReportInvoiceOrderByWithRelationInputObjectSchema).optional(),
  service: z.lazy(() => ServiceOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ReportInvoiceItemOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ReportInvoiceItemOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceItemOrderByWithRelationInput>;
export const ReportInvoiceItemOrderByWithRelationInputObjectZodSchema = makeSchema();
