import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceArgsObjectSchema } from './ReportInvoiceArgs.schema';
import { ServiceArgsObjectSchema } from './ServiceArgs.schema'

const makeSchema = () => z.object({
  invoice: z.union([z.boolean(), z.lazy(() => ReportInvoiceArgsObjectSchema)]).optional(),
  service: z.union([z.boolean(), z.lazy(() => ServiceArgsObjectSchema)]).optional()
}).strict();
export const ReportInvoiceItemIncludeObjectSchema: z.ZodType<Prisma.ReportInvoiceItemInclude> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceItemInclude>;
export const ReportInvoiceItemIncludeObjectZodSchema = makeSchema();
