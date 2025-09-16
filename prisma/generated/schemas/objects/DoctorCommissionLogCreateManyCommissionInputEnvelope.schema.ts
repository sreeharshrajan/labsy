import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionLogCreateManyCommissionInputObjectSchema } from './DoctorCommissionLogCreateManyCommissionInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => DoctorCommissionLogCreateManyCommissionInputObjectSchema), z.lazy(() => DoctorCommissionLogCreateManyCommissionInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const DoctorCommissionLogCreateManyCommissionInputEnvelopeObjectSchema: z.ZodType<Prisma.DoctorCommissionLogCreateManyCommissionInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogCreateManyCommissionInputEnvelope>;
export const DoctorCommissionLogCreateManyCommissionInputEnvelopeObjectZodSchema = makeSchema();
