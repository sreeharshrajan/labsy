import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceItemWhereInputObjectSchema } from './ReportInvoiceItemWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ReportInvoiceItemWhereInputObjectSchema).optional(),
  some: z.lazy(() => ReportInvoiceItemWhereInputObjectSchema).optional(),
  none: z.lazy(() => ReportInvoiceItemWhereInputObjectSchema).optional()
}).strict();
export const ReportInvoiceItemListRelationFilterObjectSchema: z.ZodType<Prisma.ReportInvoiceItemListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceItemListRelationFilter>;
export const ReportInvoiceItemListRelationFilterObjectZodSchema = makeSchema();
