import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceCreateManyDoctorInputObjectSchema } from './ReportInvoiceCreateManyDoctorInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReportInvoiceCreateManyDoctorInputObjectSchema), z.lazy(() => ReportInvoiceCreateManyDoctorInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportInvoiceCreateManyDoctorInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportInvoiceCreateManyDoctorInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceCreateManyDoctorInputEnvelope>;
export const ReportInvoiceCreateManyDoctorInputEnvelopeObjectZodSchema = makeSchema();
