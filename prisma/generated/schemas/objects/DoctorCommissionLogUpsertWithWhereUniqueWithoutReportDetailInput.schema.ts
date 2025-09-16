import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionLogWhereUniqueInputObjectSchema } from './DoctorCommissionLogWhereUniqueInput.schema';
import { DoctorCommissionLogUpdateWithoutReportDetailInputObjectSchema } from './DoctorCommissionLogUpdateWithoutReportDetailInput.schema';
import { DoctorCommissionLogUncheckedUpdateWithoutReportDetailInputObjectSchema } from './DoctorCommissionLogUncheckedUpdateWithoutReportDetailInput.schema';
import { DoctorCommissionLogCreateWithoutReportDetailInputObjectSchema } from './DoctorCommissionLogCreateWithoutReportDetailInput.schema';
import { DoctorCommissionLogUncheckedCreateWithoutReportDetailInputObjectSchema } from './DoctorCommissionLogUncheckedCreateWithoutReportDetailInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DoctorCommissionLogUpdateWithoutReportDetailInputObjectSchema), z.lazy(() => DoctorCommissionLogUncheckedUpdateWithoutReportDetailInputObjectSchema)]),
  create: z.union([z.lazy(() => DoctorCommissionLogCreateWithoutReportDetailInputObjectSchema), z.lazy(() => DoctorCommissionLogUncheckedCreateWithoutReportDetailInputObjectSchema)])
}).strict();
export const DoctorCommissionLogUpsertWithWhereUniqueWithoutReportDetailInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogUpsertWithWhereUniqueWithoutReportDetailInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogUpsertWithWhereUniqueWithoutReportDetailInput>;
export const DoctorCommissionLogUpsertWithWhereUniqueWithoutReportDetailInputObjectZodSchema = makeSchema();
