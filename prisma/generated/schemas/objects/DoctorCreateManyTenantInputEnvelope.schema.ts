import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCreateManyTenantInputObjectSchema } from './DoctorCreateManyTenantInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => DoctorCreateManyTenantInputObjectSchema), z.lazy(() => DoctorCreateManyTenantInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const DoctorCreateManyTenantInputEnvelopeObjectSchema: z.ZodType<Prisma.DoctorCreateManyTenantInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCreateManyTenantInputEnvelope>;
export const DoctorCreateManyTenantInputEnvelopeObjectZodSchema = makeSchema();
