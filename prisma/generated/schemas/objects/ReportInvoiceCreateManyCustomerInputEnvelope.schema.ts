import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceCreateManyCustomerInputObjectSchema } from './ReportInvoiceCreateManyCustomerInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReportInvoiceCreateManyCustomerInputObjectSchema), z.lazy(() => ReportInvoiceCreateManyCustomerInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportInvoiceCreateManyCustomerInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportInvoiceCreateManyCustomerInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceCreateManyCustomerInputEnvelope>;
export const ReportInvoiceCreateManyCustomerInputEnvelopeObjectZodSchema = makeSchema();
