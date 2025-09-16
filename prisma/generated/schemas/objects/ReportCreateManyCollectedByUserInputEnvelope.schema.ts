import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportCreateManyCollectedByUserInputObjectSchema } from './ReportCreateManyCollectedByUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReportCreateManyCollectedByUserInputObjectSchema), z.lazy(() => ReportCreateManyCollectedByUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportCreateManyCollectedByUserInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportCreateManyCollectedByUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateManyCollectedByUserInputEnvelope>;
export const ReportCreateManyCollectedByUserInputEnvelopeObjectZodSchema = makeSchema();
