import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ReportInvoiceOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ReportInvoiceOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceOrderByRelationAggregateInput>;
export const ReportInvoiceOrderByRelationAggregateInputObjectZodSchema = makeSchema();
