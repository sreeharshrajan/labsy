import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportCreateManyDoctorInputObjectSchema } from './ReportCreateManyDoctorInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReportCreateManyDoctorInputObjectSchema), z.lazy(() => ReportCreateManyDoctorInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportCreateManyDoctorInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportCreateManyDoctorInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateManyDoctorInputEnvelope>;
export const ReportCreateManyDoctorInputEnvelopeObjectZodSchema = makeSchema();
