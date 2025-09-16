import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceSelectObjectSchema } from './ReportInvoiceSelect.schema';
import { ReportInvoiceIncludeObjectSchema } from './ReportInvoiceInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ReportInvoiceSelectObjectSchema).optional(),
  include: z.lazy(() => ReportInvoiceIncludeObjectSchema).optional()
}).strict();
export const ReportInvoiceArgsObjectSchema = makeSchema();
export const ReportInvoiceArgsObjectZodSchema = makeSchema();
