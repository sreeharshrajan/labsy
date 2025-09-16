import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportCreateManyCreatedByUserInputObjectSchema } from './ReportCreateManyCreatedByUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReportCreateManyCreatedByUserInputObjectSchema), z.lazy(() => ReportCreateManyCreatedByUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportCreateManyCreatedByUserInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportCreateManyCreatedByUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateManyCreatedByUserInputEnvelope>;
export const ReportCreateManyCreatedByUserInputEnvelopeObjectZodSchema = makeSchema();
