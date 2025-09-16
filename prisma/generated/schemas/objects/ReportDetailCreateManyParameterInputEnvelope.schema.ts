import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportDetailCreateManyParameterInputObjectSchema } from './ReportDetailCreateManyParameterInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReportDetailCreateManyParameterInputObjectSchema), z.lazy(() => ReportDetailCreateManyParameterInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportDetailCreateManyParameterInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportDetailCreateManyParameterInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailCreateManyParameterInputEnvelope>;
export const ReportDetailCreateManyParameterInputEnvelopeObjectZodSchema = makeSchema();
