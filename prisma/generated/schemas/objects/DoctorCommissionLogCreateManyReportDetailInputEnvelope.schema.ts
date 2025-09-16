import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionLogCreateManyReportDetailInputObjectSchema } from './DoctorCommissionLogCreateManyReportDetailInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => DoctorCommissionLogCreateManyReportDetailInputObjectSchema), z.lazy(() => DoctorCommissionLogCreateManyReportDetailInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const DoctorCommissionLogCreateManyReportDetailInputEnvelopeObjectSchema: z.ZodType<Prisma.DoctorCommissionLogCreateManyReportDetailInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogCreateManyReportDetailInputEnvelope>;
export const DoctorCommissionLogCreateManyReportDetailInputEnvelopeObjectZodSchema = makeSchema();
