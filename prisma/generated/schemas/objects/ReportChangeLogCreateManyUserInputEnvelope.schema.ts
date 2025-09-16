import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportChangeLogCreateManyUserInputObjectSchema } from './ReportChangeLogCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReportChangeLogCreateManyUserInputObjectSchema), z.lazy(() => ReportChangeLogCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportChangeLogCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportChangeLogCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReportChangeLogCreateManyUserInputEnvelope>;
export const ReportChangeLogCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
