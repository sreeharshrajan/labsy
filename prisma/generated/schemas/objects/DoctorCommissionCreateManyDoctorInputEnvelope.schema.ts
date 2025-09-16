import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionCreateManyDoctorInputObjectSchema } from './DoctorCommissionCreateManyDoctorInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => DoctorCommissionCreateManyDoctorInputObjectSchema), z.lazy(() => DoctorCommissionCreateManyDoctorInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const DoctorCommissionCreateManyDoctorInputEnvelopeObjectSchema: z.ZodType<Prisma.DoctorCommissionCreateManyDoctorInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionCreateManyDoctorInputEnvelope>;
export const DoctorCommissionCreateManyDoctorInputEnvelopeObjectZodSchema = makeSchema();
