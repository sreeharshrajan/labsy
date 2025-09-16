import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportCreateManyCustomerInputObjectSchema } from './ReportCreateManyCustomerInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReportCreateManyCustomerInputObjectSchema), z.lazy(() => ReportCreateManyCustomerInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportCreateManyCustomerInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportCreateManyCustomerInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateManyCustomerInputEnvelope>;
export const ReportCreateManyCustomerInputEnvelopeObjectZodSchema = makeSchema();
