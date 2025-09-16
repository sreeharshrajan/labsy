import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionLogCreateWithoutReportDetailInputObjectSchema } from './DoctorCommissionLogCreateWithoutReportDetailInput.schema';
import { DoctorCommissionLogUncheckedCreateWithoutReportDetailInputObjectSchema } from './DoctorCommissionLogUncheckedCreateWithoutReportDetailInput.schema';
import { DoctorCommissionLogCreateOrConnectWithoutReportDetailInputObjectSchema } from './DoctorCommissionLogCreateOrConnectWithoutReportDetailInput.schema';
import { DoctorCommissionLogCreateManyReportDetailInputEnvelopeObjectSchema } from './DoctorCommissionLogCreateManyReportDetailInputEnvelope.schema';
import { DoctorCommissionLogWhereUniqueInputObjectSchema } from './DoctorCommissionLogWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCommissionLogCreateWithoutReportDetailInputObjectSchema), z.lazy(() => DoctorCommissionLogCreateWithoutReportDetailInputObjectSchema).array(), z.lazy(() => DoctorCommissionLogUncheckedCreateWithoutReportDetailInputObjectSchema), z.lazy(() => DoctorCommissionLogUncheckedCreateWithoutReportDetailInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DoctorCommissionLogCreateOrConnectWithoutReportDetailInputObjectSchema), z.lazy(() => DoctorCommissionLogCreateOrConnectWithoutReportDetailInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DoctorCommissionLogCreateManyReportDetailInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema), z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DoctorCommissionLogUncheckedCreateNestedManyWithoutReportDetailInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogUncheckedCreateNestedManyWithoutReportDetailInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogUncheckedCreateNestedManyWithoutReportDetailInput>;
export const DoctorCommissionLogUncheckedCreateNestedManyWithoutReportDetailInputObjectZodSchema = makeSchema();
