import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionLogCreateWithoutDoctorInputObjectSchema } from './DoctorCommissionLogCreateWithoutDoctorInput.schema';
import { DoctorCommissionLogUncheckedCreateWithoutDoctorInputObjectSchema } from './DoctorCommissionLogUncheckedCreateWithoutDoctorInput.schema';
import { DoctorCommissionLogCreateOrConnectWithoutDoctorInputObjectSchema } from './DoctorCommissionLogCreateOrConnectWithoutDoctorInput.schema';
import { DoctorCommissionLogCreateManyDoctorInputEnvelopeObjectSchema } from './DoctorCommissionLogCreateManyDoctorInputEnvelope.schema';
import { DoctorCommissionLogWhereUniqueInputObjectSchema } from './DoctorCommissionLogWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCommissionLogCreateWithoutDoctorInputObjectSchema), z.lazy(() => DoctorCommissionLogCreateWithoutDoctorInputObjectSchema).array(), z.lazy(() => DoctorCommissionLogUncheckedCreateWithoutDoctorInputObjectSchema), z.lazy(() => DoctorCommissionLogUncheckedCreateWithoutDoctorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DoctorCommissionLogCreateOrConnectWithoutDoctorInputObjectSchema), z.lazy(() => DoctorCommissionLogCreateOrConnectWithoutDoctorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DoctorCommissionLogCreateManyDoctorInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema), z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DoctorCommissionLogCreateNestedManyWithoutDoctorInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogCreateNestedManyWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogCreateNestedManyWithoutDoctorInput>;
export const DoctorCommissionLogCreateNestedManyWithoutDoctorInputObjectZodSchema = makeSchema();
