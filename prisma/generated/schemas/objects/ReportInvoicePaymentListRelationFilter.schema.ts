import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoicePaymentWhereInputObjectSchema } from './ReportInvoicePaymentWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ReportInvoicePaymentWhereInputObjectSchema).optional(),
  some: z.lazy(() => ReportInvoicePaymentWhereInputObjectSchema).optional(),
  none: z.lazy(() => ReportInvoicePaymentWhereInputObjectSchema).optional()
}).strict();
export const ReportInvoicePaymentListRelationFilterObjectSchema: z.ZodType<Prisma.ReportInvoicePaymentListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoicePaymentListRelationFilter>;
export const ReportInvoicePaymentListRelationFilterObjectZodSchema = makeSchema();
