import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceWhereInputObjectSchema } from './ReportInvoiceWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ReportInvoiceWhereInputObjectSchema).optional(),
  some: z.lazy(() => ReportInvoiceWhereInputObjectSchema).optional(),
  none: z.lazy(() => ReportInvoiceWhereInputObjectSchema).optional()
}).strict();
export const ReportInvoiceListRelationFilterObjectSchema: z.ZodType<Prisma.ReportInvoiceListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceListRelationFilter>;
export const ReportInvoiceListRelationFilterObjectZodSchema = makeSchema();
