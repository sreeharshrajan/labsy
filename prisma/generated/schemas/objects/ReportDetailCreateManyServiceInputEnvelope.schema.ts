import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportDetailCreateManyServiceInputObjectSchema } from './ReportDetailCreateManyServiceInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReportDetailCreateManyServiceInputObjectSchema), z.lazy(() => ReportDetailCreateManyServiceInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportDetailCreateManyServiceInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportDetailCreateManyServiceInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailCreateManyServiceInputEnvelope>;
export const ReportDetailCreateManyServiceInputEnvelopeObjectZodSchema = makeSchema();
