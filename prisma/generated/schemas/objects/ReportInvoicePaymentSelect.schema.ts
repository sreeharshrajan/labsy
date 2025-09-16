import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceArgsObjectSchema } from './ReportInvoiceArgs.schema';
import { TenantArgsObjectSchema } from './TenantArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  amount: z.boolean().optional(),
  method: z.boolean().optional(),
  status: z.boolean().optional(),
  referenceNo: z.boolean().optional(),
  transactionId: z.boolean().optional(),
  paidAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  invoiceId: z.boolean().optional(),
  tenantId: z.boolean().optional(),
  invoice: z.union([z.boolean(), z.lazy(() => ReportInvoiceArgsObjectSchema)]).optional(),
  tenant: z.union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)]).optional()
}).strict();
export const ReportInvoicePaymentSelectObjectSchema: z.ZodType<Prisma.ReportInvoicePaymentSelect> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoicePaymentSelect>;
export const ReportInvoicePaymentSelectObjectZodSchema = makeSchema();
