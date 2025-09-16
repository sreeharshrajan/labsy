import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoicePaymentCreateManyInvoiceInputObjectSchema } from './ReportInvoicePaymentCreateManyInvoiceInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReportInvoicePaymentCreateManyInvoiceInputObjectSchema), z.lazy(() => ReportInvoicePaymentCreateManyInvoiceInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportInvoicePaymentCreateManyInvoiceInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportInvoicePaymentCreateManyInvoiceInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoicePaymentCreateManyInvoiceInputEnvelope>;
export const ReportInvoicePaymentCreateManyInvoiceInputEnvelopeObjectZodSchema = makeSchema();
