import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorAddressCreateManyDoctorInputObjectSchema } from './DoctorAddressCreateManyDoctorInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => DoctorAddressCreateManyDoctorInputObjectSchema), z.lazy(() => DoctorAddressCreateManyDoctorInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const DoctorAddressCreateManyDoctorInputEnvelopeObjectSchema: z.ZodType<Prisma.DoctorAddressCreateManyDoctorInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.DoctorAddressCreateManyDoctorInputEnvelope>;
export const DoctorAddressCreateManyDoctorInputEnvelopeObjectZodSchema = makeSchema();
