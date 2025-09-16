import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoicePaymentCreateManyTenantInputObjectSchema } from './ReportInvoicePaymentCreateManyTenantInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReportInvoicePaymentCreateManyTenantInputObjectSchema), z.lazy(() => ReportInvoicePaymentCreateManyTenantInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportInvoicePaymentCreateManyTenantInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportInvoicePaymentCreateManyTenantInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoicePaymentCreateManyTenantInputEnvelope>;
export const ReportInvoicePaymentCreateManyTenantInputEnvelopeObjectZodSchema = makeSchema();
