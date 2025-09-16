import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ReportInvoiceItemOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ReportInvoiceItemOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceItemOrderByRelationAggregateInput>;
export const ReportInvoiceItemOrderByRelationAggregateInputObjectZodSchema = makeSchema();
