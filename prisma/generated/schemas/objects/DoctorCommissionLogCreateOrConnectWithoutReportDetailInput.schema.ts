import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionLogWhereUniqueInputObjectSchema } from './DoctorCommissionLogWhereUniqueInput.schema';
import { DoctorCommissionLogCreateWithoutReportDetailInputObjectSchema } from './DoctorCommissionLogCreateWithoutReportDetailInput.schema';
import { DoctorCommissionLogUncheckedCreateWithoutReportDetailInputObjectSchema } from './DoctorCommissionLogUncheckedCreateWithoutReportDetailInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DoctorCommissionLogCreateWithoutReportDetailInputObjectSchema), z.lazy(() => DoctorCommissionLogUncheckedCreateWithoutReportDetailInputObjectSchema)])
}).strict();
export const DoctorCommissionLogCreateOrConnectWithoutReportDetailInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogCreateOrConnectWithoutReportDetailInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogCreateOrConnectWithoutReportDetailInput>;
export const DoctorCommissionLogCreateOrConnectWithoutReportDetailInputObjectZodSchema = makeSchema();
