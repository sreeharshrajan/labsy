import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceWhereInputObjectSchema } from './ReportInvoiceWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ReportInvoiceWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ReportInvoiceWhereInputObjectSchema).optional()
}).strict();
export const ReportInvoiceScalarRelationFilterObjectSchema: z.ZodType<Prisma.ReportInvoiceScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceScalarRelationFilter>;
export const ReportInvoiceScalarRelationFilterObjectZodSchema = makeSchema();
