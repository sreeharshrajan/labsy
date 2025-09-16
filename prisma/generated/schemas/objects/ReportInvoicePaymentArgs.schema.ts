import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoicePaymentSelectObjectSchema } from './ReportInvoicePaymentSelect.schema';
import { ReportInvoicePaymentIncludeObjectSchema } from './ReportInvoicePaymentInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ReportInvoicePaymentSelectObjectSchema).optional(),
  include: z.lazy(() => ReportInvoicePaymentIncludeObjectSchema).optional()
}).strict();
export const ReportInvoicePaymentArgsObjectSchema = makeSchema();
export const ReportInvoicePaymentArgsObjectZodSchema = makeSchema();
