import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceArgsObjectSchema } from './ReportInvoiceArgs.schema';
import { TenantArgsObjectSchema } from './TenantArgs.schema'

const makeSchema = () => z.object({
  invoice: z.union([z.boolean(), z.lazy(() => ReportInvoiceArgsObjectSchema)]).optional(),
  tenant: z.union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)]).optional()
}).strict();
export const ReportInvoicePaymentIncludeObjectSchema: z.ZodType<Prisma.ReportInvoicePaymentInclude> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoicePaymentInclude>;
export const ReportInvoicePaymentIncludeObjectZodSchema = makeSchema();
