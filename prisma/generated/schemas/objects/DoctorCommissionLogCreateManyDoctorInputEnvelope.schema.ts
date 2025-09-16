import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionLogCreateManyDoctorInputObjectSchema } from './DoctorCommissionLogCreateManyDoctorInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => DoctorCommissionLogCreateManyDoctorInputObjectSchema), z.lazy(() => DoctorCommissionLogCreateManyDoctorInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const DoctorCommissionLogCreateManyDoctorInputEnvelopeObjectSchema: z.ZodType<Prisma.DoctorCommissionLogCreateManyDoctorInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogCreateManyDoctorInputEnvelope>;
export const DoctorCommissionLogCreateManyDoctorInputEnvelopeObjectZodSchema = makeSchema();
