import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceItemCreateManyServiceInputObjectSchema } from './ReportInvoiceItemCreateManyServiceInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReportInvoiceItemCreateManyServiceInputObjectSchema), z.lazy(() => ReportInvoiceItemCreateManyServiceInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportInvoiceItemCreateManyServiceInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportInvoiceItemCreateManyServiceInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceItemCreateManyServiceInputEnvelope>;
export const ReportInvoiceItemCreateManyServiceInputEnvelopeObjectZodSchema = makeSchema();
