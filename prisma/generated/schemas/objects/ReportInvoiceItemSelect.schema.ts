import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceArgsObjectSchema } from './ReportInvoiceArgs.schema';
import { ServiceArgsObjectSchema } from './ServiceArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  quantity: z.boolean().optional(),
  price: z.boolean().optional(),
  discount: z.boolean().optional(),
  total: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  invoiceId: z.boolean().optional(),
  serviceId: z.boolean().optional(),
  invoice: z.union([z.boolean(), z.lazy(() => ReportInvoiceArgsObjectSchema)]).optional(),
  service: z.union([z.boolean(), z.lazy(() => ServiceArgsObjectSchema)]).optional()
}).strict();
export const ReportInvoiceItemSelectObjectSchema: z.ZodType<Prisma.ReportInvoiceItemSelect> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceItemSelect>;
export const ReportInvoiceItemSelectObjectZodSchema = makeSchema();
