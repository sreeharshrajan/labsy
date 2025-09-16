import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionLogCreateWithoutCommissionInputObjectSchema } from './DoctorCommissionLogCreateWithoutCommissionInput.schema';
import { DoctorCommissionLogUncheckedCreateWithoutCommissionInputObjectSchema } from './DoctorCommissionLogUncheckedCreateWithoutCommissionInput.schema';
import { DoctorCommissionLogCreateOrConnectWithoutCommissionInputObjectSchema } from './DoctorCommissionLogCreateOrConnectWithoutCommissionInput.schema';
import { DoctorCommissionLogUpsertWithWhereUniqueWithoutCommissionInputObjectSchema } from './DoctorCommissionLogUpsertWithWhereUniqueWithoutCommissionInput.schema';
import { DoctorCommissionLogCreateManyCommissionInputEnvelopeObjectSchema } from './DoctorCommissionLogCreateManyCommissionInputEnvelope.schema';
import { DoctorCommissionLogWhereUniqueInputObjectSchema } from './DoctorCommissionLogWhereUniqueInput.schema';
import { DoctorCommissionLogUpdateWithWhereUniqueWithoutCommissionInputObjectSchema } from './DoctorCommissionLogUpdateWithWhereUniqueWithoutCommissionInput.schema';
import { DoctorCommissionLogUpdateManyWithWhereWithoutCommissionInputObjectSchema } from './DoctorCommissionLogUpdateManyWithWhereWithoutCommissionInput.schema';
import { DoctorCommissionLogScalarWhereInputObjectSchema } from './DoctorCommissionLogScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCommissionLogCreateWithoutCommissionInputObjectSchema), z.lazy(() => DoctorCommissionLogCreateWithoutCommissionInputObjectSchema).array(), z.lazy(() => DoctorCommissionLogUncheckedCreateWithoutCommissionInputObjectSchema), z.lazy(() => DoctorCommissionLogUncheckedCreateWithoutCommissionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DoctorCommissionLogCreateOrConnectWithoutCommissionInputObjectSchema), z.lazy(() => DoctorCommissionLogCreateOrConnectWithoutCommissionInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DoctorCommissionLogUpsertWithWhereUniqueWithoutCommissionInputObjectSchema), z.lazy(() => DoctorCommissionLogUpsertWithWhereUniqueWithoutCommissionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DoctorCommissionLogCreateManyCommissionInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema), z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema), z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema), z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema), z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DoctorCommissionLogUpdateWithWhereUniqueWithoutCommissionInputObjectSchema), z.lazy(() => DoctorCommissionLogUpdateWithWhereUniqueWithoutCommissionInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DoctorCommissionLogUpdateManyWithWhereWithoutCommissionInputObjectSchema), z.lazy(() => DoctorCommissionLogUpdateManyWithWhereWithoutCommissionInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DoctorCommissionLogScalarWhereInputObjectSchema), z.lazy(() => DoctorCommissionLogScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const DoctorCommissionLogUncheckedUpdateManyWithoutCommissionNestedInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogUncheckedUpdateManyWithoutCommissionNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogUncheckedUpdateManyWithoutCommissionNestedInput>;
export const DoctorCommissionLogUncheckedUpdateManyWithoutCommissionNestedInputObjectZodSchema = makeSchema();
