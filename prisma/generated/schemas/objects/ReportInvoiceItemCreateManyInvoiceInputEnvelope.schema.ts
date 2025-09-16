import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceItemCreateManyInvoiceInputObjectSchema } from './ReportInvoiceItemCreateManyInvoiceInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReportInvoiceItemCreateManyInvoiceInputObjectSchema), z.lazy(() => ReportInvoiceItemCreateManyInvoiceInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportInvoiceItemCreateManyInvoiceInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportInvoiceItemCreateManyInvoiceInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceItemCreateManyInvoiceInputEnvelope>;
export const ReportInvoiceItemCreateManyInvoiceInputEnvelopeObjectZodSchema = makeSchema();
