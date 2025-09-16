import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionLogCreateWithoutDoctorInputObjectSchema } from './DoctorCommissionLogCreateWithoutDoctorInput.schema';
import { DoctorCommissionLogUncheckedCreateWithoutDoctorInputObjectSchema } from './DoctorCommissionLogUncheckedCreateWithoutDoctorInput.schema';
import { DoctorCommissionLogCreateOrConnectWithoutDoctorInputObjectSchema } from './DoctorCommissionLogCreateOrConnectWithoutDoctorInput.schema';
import { DoctorCommissionLogUpsertWithWhereUniqueWithoutDoctorInputObjectSchema } from './DoctorCommissionLogUpsertWithWhereUniqueWithoutDoctorInput.schema';
import { DoctorCommissionLogCreateManyDoctorInputEnvelopeObjectSchema } from './DoctorCommissionLogCreateManyDoctorInputEnvelope.schema';
import { DoctorCommissionLogWhereUniqueInputObjectSchema } from './DoctorCommissionLogWhereUniqueInput.schema';
import { DoctorCommissionLogUpdateWithWhereUniqueWithoutDoctorInputObjectSchema } from './DoctorCommissionLogUpdateWithWhereUniqueWithoutDoctorInput.schema';
import { DoctorCommissionLogUpdateManyWithWhereWithoutDoctorInputObjectSchema } from './DoctorCommissionLogUpdateManyWithWhereWithoutDoctorInput.schema';
import { DoctorCommissionLogScalarWhereInputObjectSchema } from './DoctorCommissionLogScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCommissionLogCreateWithoutDoctorInputObjectSchema), z.lazy(() => DoctorCommissionLogCreateWithoutDoctorInputObjectSchema).array(), z.lazy(() => DoctorCommissionLogUncheckedCreateWithoutDoctorInputObjectSchema), z.lazy(() => DoctorCommissionLogUncheckedCreateWithoutDoctorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DoctorCommissionLogCreateOrConnectWithoutDoctorInputObjectSchema), z.lazy(() => DoctorCommissionLogCreateOrConnectWithoutDoctorInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DoctorCommissionLogUpsertWithWhereUniqueWithoutDoctorInputObjectSchema), z.lazy(() => DoctorCommissionLogUpsertWithWhereUniqueWithoutDoctorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DoctorCommissionLogCreateManyDoctorInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema), z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema), z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema), z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema), z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DoctorCommissionLogUpdateWithWhereUniqueWithoutDoctorInputObjectSchema), z.lazy(() => DoctorCommissionLogUpdateWithWhereUniqueWithoutDoctorInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DoctorCommissionLogUpdateManyWithWhereWithoutDoctorInputObjectSchema), z.lazy(() => DoctorCommissionLogUpdateManyWithWhereWithoutDoctorInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DoctorCommissionLogScalarWhereInputObjectSchema), z.lazy(() => DoctorCommissionLogScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const DoctorCommissionLogUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogUncheckedUpdateManyWithoutDoctorNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogUncheckedUpdateManyWithoutDoctorNestedInput>;
export const DoctorCommissionLogUncheckedUpdateManyWithoutDoctorNestedInputObjectZodSchema = makeSchema();
