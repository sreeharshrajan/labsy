import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceCountOutputTypeSelectObjectSchema } from './ReportInvoiceCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ReportInvoiceCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ReportInvoiceCountOutputTypeArgsObjectSchema = makeSchema();
export const ReportInvoiceCountOutputTypeArgsObjectZodSchema = makeSchema();
