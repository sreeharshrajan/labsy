import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionCreateWithoutDoctorInputObjectSchema } from './DoctorCommissionCreateWithoutDoctorInput.schema';
import { DoctorCommissionUncheckedCreateWithoutDoctorInputObjectSchema } from './DoctorCommissionUncheckedCreateWithoutDoctorInput.schema';
import { DoctorCommissionCreateOrConnectWithoutDoctorInputObjectSchema } from './DoctorCommissionCreateOrConnectWithoutDoctorInput.schema';
import { DoctorCommissionCreateManyDoctorInputEnvelopeObjectSchema } from './DoctorCommissionCreateManyDoctorInputEnvelope.schema';
import { DoctorCommissionWhereUniqueInputObjectSchema } from './DoctorCommissionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCommissionCreateWithoutDoctorInputObjectSchema), z.lazy(() => DoctorCommissionCreateWithoutDoctorInputObjectSchema).array(), z.lazy(() => DoctorCommissionUncheckedCreateWithoutDoctorInputObjectSchema), z.lazy(() => DoctorCommissionUncheckedCreateWithoutDoctorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DoctorCommissionCreateOrConnectWithoutDoctorInputObjectSchema), z.lazy(() => DoctorCommissionCreateOrConnectWithoutDoctorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DoctorCommissionCreateManyDoctorInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DoctorCommissionWhereUniqueInputObjectSchema), z.lazy(() => DoctorCommissionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DoctorCommissionUncheckedCreateNestedManyWithoutDoctorInputObjectSchema: z.ZodType<Prisma.DoctorCommissionUncheckedCreateNestedManyWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionUncheckedCreateNestedManyWithoutDoctorInput>;
export const DoctorCommissionUncheckedCreateNestedManyWithoutDoctorInputObjectZodSchema = makeSchema();
