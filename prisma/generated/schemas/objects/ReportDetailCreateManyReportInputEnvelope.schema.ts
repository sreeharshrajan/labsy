import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportDetailCreateManyReportInputObjectSchema } from './ReportDetailCreateManyReportInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReportDetailCreateManyReportInputObjectSchema), z.lazy(() => ReportDetailCreateManyReportInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportDetailCreateManyReportInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportDetailCreateManyReportInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailCreateManyReportInputEnvelope>;
export const ReportDetailCreateManyReportInputEnvelopeObjectZodSchema = makeSchema();
