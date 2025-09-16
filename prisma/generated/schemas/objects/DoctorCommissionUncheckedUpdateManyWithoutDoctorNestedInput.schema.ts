import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionCreateWithoutDoctorInputObjectSchema } from './DoctorCommissionCreateWithoutDoctorInput.schema';
import { DoctorCommissionUncheckedCreateWithoutDoctorInputObjectSchema } from './DoctorCommissionUncheckedCreateWithoutDoctorInput.schema';
import { DoctorCommissionCreateOrConnectWithoutDoctorInputObjectSchema } from './DoctorCommissionCreateOrConnectWithoutDoctorInput.schema';
import { DoctorCommissionUpsertWithWhereUniqueWithoutDoctorInputObjectSchema } from './DoctorCommissionUpsertWithWhereUniqueWithoutDoctorInput.schema';
import { DoctorCommissionCreateManyDoctorInputEnvelopeObjectSchema } from './DoctorCommissionCreateManyDoctorInputEnvelope.schema';
import { DoctorCommissionWhereUniqueInputObjectSchema } from './DoctorCommissionWhereUniqueInput.schema';
import { DoctorCommissionUpdateWithWhereUniqueWithoutDoctorInputObjectSchema } from './DoctorCommissionUpdateWithWhereUniqueWithoutDoctorInput.schema';
import { DoctorCommissionUpdateManyWithWhereWithoutDoctorInputObjectSchema } from './DoctorCommissionUpdateManyWithWhereWithoutDoctorInput.schema';
import { DoctorCommissionScalarWhereInputObjectSchema } from './DoctorCommissionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCommissionCreateWithoutDoctorInputObjectSchema), z.lazy(() => DoctorCommissionCreateWithoutDoctorInputObjectSchema).array(), z.lazy(() => DoctorCommissionUncheckedCreateWithoutDoctorInputObjectSchema), z.lazy(() => DoctorCommissionUncheckedCreateWithoutDoctorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DoctorCommissionCreateOrConnectWithoutDoctorInputObjectSchema), z.lazy(() => DoctorCommissionCreateOrConnectWithoutDoctorInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DoctorCommissionUpsertWithWhereUniqueWithoutDoctorInputObjectSchema), z.lazy(() => DoctorCommissionUpsertWithWhereUniqueWithoutDoctorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DoctorCommissionCreateManyDoctorInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DoctorCommissionWhereUniqueInputObjectSchema), z.lazy(() => DoctorCommissionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DoctorCommissionWhereUniqueInputObjectSchema), z.lazy(() => DoctorCommissionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DoctorCommissionWhereUniqueInputObjectSchema), z.lazy(() => DoctorCommissionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DoctorCommissionWhereUniqueInputObjectSchema), z.lazy(() => DoctorCommissionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DoctorCommissionUpdateWithWhereUniqueWithoutDoctorInputObjectSchema), z.lazy(() => DoctorCommissionUpdateWithWhereUniqueWithoutDoctorInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DoctorCommissionUpdateManyWithWhereWithoutDoctorInputObjectSchema), z.lazy(() => DoctorCommissionUpdateManyWithWhereWithoutDoctorInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DoctorCommissionScalarWhereInputObjectSchema), z.lazy(() => DoctorCommissionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const DoctorCommissionUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema: z.ZodType<Prisma.DoctorCommissionUncheckedUpdateManyWithoutDoctorNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionUncheckedUpdateManyWithoutDoctorNestedInput>;
export const DoctorCommissionUncheckedUpdateManyWithoutDoctorNestedInputObjectZodSchema = makeSchema();
