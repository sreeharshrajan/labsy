import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportCreateManyInvoiceInputObjectSchema } from './ReportCreateManyInvoiceInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReportCreateManyInvoiceInputObjectSchema), z.lazy(() => ReportCreateManyInvoiceInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportCreateManyInvoiceInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportCreateManyInvoiceInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateManyInvoiceInputEnvelope>;
export const ReportCreateManyInvoiceInputEnvelopeObjectZodSchema = makeSchema();
