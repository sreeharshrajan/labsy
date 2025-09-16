import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionPaymentCreateManyDoctorInputObjectSchema } from './DoctorCommissionPaymentCreateManyDoctorInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => DoctorCommissionPaymentCreateManyDoctorInputObjectSchema), z.lazy(() => DoctorCommissionPaymentCreateManyDoctorInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const DoctorCommissionPaymentCreateManyDoctorInputEnvelopeObjectSchema: z.ZodType<Prisma.DoctorCommissionPaymentCreateManyDoctorInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionPaymentCreateManyDoctorInputEnvelope>;
export const DoctorCommissionPaymentCreateManyDoctorInputEnvelopeObjectZodSchema = makeSchema();
