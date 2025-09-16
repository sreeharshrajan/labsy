import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportDetailCreateManyReportTemplateInputObjectSchema } from './ReportDetailCreateManyReportTemplateInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReportDetailCreateManyReportTemplateInputObjectSchema), z.lazy(() => ReportDetailCreateManyReportTemplateInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportDetailCreateManyReportTemplateInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportDetailCreateManyReportTemplateInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailCreateManyReportTemplateInputEnvelope>;
export const ReportDetailCreateManyReportTemplateInputEnvelopeObjectZodSchema = makeSchema();
