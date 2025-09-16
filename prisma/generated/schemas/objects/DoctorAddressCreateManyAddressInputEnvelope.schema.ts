import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorAddressCreateManyAddressInputObjectSchema } from './DoctorAddressCreateManyAddressInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => DoctorAddressCreateManyAddressInputObjectSchema), z.lazy(() => DoctorAddressCreateManyAddressInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const DoctorAddressCreateManyAddressInputEnvelopeObjectSchema: z.ZodType<Prisma.DoctorAddressCreateManyAddressInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.DoctorAddressCreateManyAddressInputEnvelope>;
export const DoctorAddressCreateManyAddressInputEnvelopeObjectZodSchema = makeSchema();
