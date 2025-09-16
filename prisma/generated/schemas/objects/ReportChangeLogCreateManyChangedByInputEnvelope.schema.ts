import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportChangeLogCreateManyChangedByInputObjectSchema } from './ReportChangeLogCreateManyChangedByInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReportChangeLogCreateManyChangedByInputObjectSchema), z.lazy(() => ReportChangeLogCreateManyChangedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportChangeLogCreateManyChangedByInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportChangeLogCreateManyChangedByInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReportChangeLogCreateManyChangedByInputEnvelope>;
export const ReportChangeLogCreateManyChangedByInputEnvelopeObjectZodSchema = makeSchema();
