import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceItemSelectObjectSchema } from './ReportInvoiceItemSelect.schema';
import { ReportInvoiceItemIncludeObjectSchema } from './ReportInvoiceItemInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ReportInvoiceItemSelectObjectSchema).optional(),
  include: z.lazy(() => ReportInvoiceItemIncludeObjectSchema).optional()
}).strict();
export const ReportInvoiceItemArgsObjectSchema = makeSchema();
export const ReportInvoiceItemArgsObjectZodSchema = makeSchema();
