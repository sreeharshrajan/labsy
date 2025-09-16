import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceWhereInputObjectSchema } from './ReportInvoiceWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ReportInvoiceWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => ReportInvoiceWhereInputObjectSchema).optional().nullable()
}).strict();
export const ReportInvoiceNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.ReportInvoiceNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceNullableScalarRelationFilter>;
export const ReportInvoiceNullableScalarRelationFilterObjectZodSchema = makeSchema();
