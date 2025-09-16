import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionLogWhereUniqueInputObjectSchema } from './DoctorCommissionLogWhereUniqueInput.schema';
import { DoctorCommissionLogUpdateWithoutReportDetailInputObjectSchema } from './DoctorCommissionLogUpdateWithoutReportDetailInput.schema';
import { DoctorCommissionLogUncheckedUpdateWithoutReportDetailInputObjectSchema } from './DoctorCommissionLogUncheckedUpdateWithoutReportDetailInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DoctorCommissionLogUpdateWithoutReportDetailInputObjectSchema), z.lazy(() => DoctorCommissionLogUncheckedUpdateWithoutReportDetailInputObjectSchema)])
}).strict();
export const DoctorCommissionLogUpdateWithWhereUniqueWithoutReportDetailInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogUpdateWithWhereUniqueWithoutReportDetailInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogUpdateWithWhereUniqueWithoutReportDetailInput>;
export const DoctorCommissionLogUpdateWithWhereUniqueWithoutReportDetailInputObjectZodSchema = makeSchema();
