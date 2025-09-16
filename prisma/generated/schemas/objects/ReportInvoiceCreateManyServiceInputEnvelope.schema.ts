import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceCreateManyServiceInputObjectSchema } from './ReportInvoiceCreateManyServiceInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReportInvoiceCreateManyServiceInputObjectSchema), z.lazy(() => ReportInvoiceCreateManyServiceInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportInvoiceCreateManyServiceInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportInvoiceCreateManyServiceInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceCreateManyServiceInputEnvelope>;
export const ReportInvoiceCreateManyServiceInputEnvelopeObjectZodSchema = makeSchema();
