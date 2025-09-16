import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportChangeLogCreateManyReportInputObjectSchema } from './ReportChangeLogCreateManyReportInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReportChangeLogCreateManyReportInputObjectSchema), z.lazy(() => ReportChangeLogCreateManyReportInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportChangeLogCreateManyReportInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportChangeLogCreateManyReportInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReportChangeLogCreateManyReportInputEnvelope>;
export const ReportChangeLogCreateManyReportInputEnvelopeObjectZodSchema = makeSchema();
