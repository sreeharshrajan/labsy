import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceCreateManyTenantInputObjectSchema } from './ReportInvoiceCreateManyTenantInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReportInvoiceCreateManyTenantInputObjectSchema), z.lazy(() => ReportInvoiceCreateManyTenantInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportInvoiceCreateManyTenantInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportInvoiceCreateManyTenantInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceCreateManyTenantInputEnvelope>;
export const ReportInvoiceCreateManyTenantInputEnvelopeObjectZodSchema = makeSchema();
