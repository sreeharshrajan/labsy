import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ReportInvoicePaymentOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ReportInvoicePaymentOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoicePaymentOrderByRelationAggregateInput>;
export const ReportInvoicePaymentOrderByRelationAggregateInputObjectZodSchema = makeSchema();
