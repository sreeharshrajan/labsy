import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionLogCreateWithoutReportDetailInputObjectSchema } from './DoctorCommissionLogCreateWithoutReportDetailInput.schema';
import { DoctorCommissionLogUncheckedCreateWithoutReportDetailInputObjectSchema } from './DoctorCommissionLogUncheckedCreateWithoutReportDetailInput.schema';
import { DoctorCommissionLogCreateOrConnectWithoutReportDetailInputObjectSchema } from './DoctorCommissionLogCreateOrConnectWithoutReportDetailInput.schema';
import { DoctorCommissionLogUpsertWithWhereUniqueWithoutReportDetailInputObjectSchema } from './DoctorCommissionLogUpsertWithWhereUniqueWithoutReportDetailInput.schema';
import { DoctorCommissionLogCreateManyReportDetailInputEnvelopeObjectSchema } from './DoctorCommissionLogCreateManyReportDetailInputEnvelope.schema';
import { DoctorCommissionLogWhereUniqueInputObjectSchema } from './DoctorCommissionLogWhereUniqueInput.schema';
import { DoctorCommissionLogUpdateWithWhereUniqueWithoutReportDetailInputObjectSchema } from './DoctorCommissionLogUpdateWithWhereUniqueWithoutReportDetailInput.schema';
import { DoctorCommissionLogUpdateManyWithWhereWithoutReportDetailInputObjectSchema } from './DoctorCommissionLogUpdateManyWithWhereWithoutReportDetailInput.schema';
import { DoctorCommissionLogScalarWhereInputObjectSchema } from './DoctorCommissionLogScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCommissionLogCreateWithoutReportDetailInputObjectSchema), z.lazy(() => DoctorCommissionLogCreateWithoutReportDetailInputObjectSchema).array(), z.lazy(() => DoctorCommissionLogUncheckedCreateWithoutReportDetailInputObjectSchema), z.lazy(() => DoctorCommissionLogUncheckedCreateWithoutReportDetailInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DoctorCommissionLogCreateOrConnectWithoutReportDetailInputObjectSchema), z.lazy(() => DoctorCommissionLogCreateOrConnectWithoutReportDetailInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DoctorCommissionLogUpsertWithWhereUniqueWithoutReportDetailInputObjectSchema), z.lazy(() => DoctorCommissionLogUpsertWithWhereUniqueWithoutReportDetailInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DoctorCommissionLogCreateManyReportDetailInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema), z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema), z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema), z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema), z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DoctorCommissionLogUpdateWithWhereUniqueWithoutReportDetailInputObjectSchema), z.lazy(() => DoctorCommissionLogUpdateWithWhereUniqueWithoutReportDetailInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DoctorCommissionLogUpdateManyWithWhereWithoutReportDetailInputObjectSchema), z.lazy(() => DoctorCommissionLogUpdateManyWithWhereWithoutReportDetailInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DoctorCommissionLogScalarWhereInputObjectSchema), z.lazy(() => DoctorCommissionLogScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const DoctorCommissionLogUpdateManyWithoutReportDetailNestedInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogUpdateManyWithoutReportDetailNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogUpdateManyWithoutReportDetailNestedInput>;
export const DoctorCommissionLogUpdateManyWithoutReportDetailNestedInputObjectZodSchema = makeSchema();
