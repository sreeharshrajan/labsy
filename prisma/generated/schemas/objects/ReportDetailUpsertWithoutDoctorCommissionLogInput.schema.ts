import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportDetailUpdateWithoutDoctorCommissionLogInputObjectSchema } from './ReportDetailUpdateWithoutDoctorCommissionLogInput.schema';
import { ReportDetailUncheckedUpdateWithoutDoctorCommissionLogInputObjectSchema } from './ReportDetailUncheckedUpdateWithoutDoctorCommissionLogInput.schema';
import { ReportDetailCreateWithoutDoctorCommissionLogInputObjectSchema } from './ReportDetailCreateWithoutDoctorCommissionLogInput.schema';
import { ReportDetailUncheckedCreateWithoutDoctorCommissionLogInputObjectSchema } from './ReportDetailUncheckedCreateWithoutDoctorCommissionLogInput.schema';
import { ReportDetailWhereInputObjectSchema } from './ReportDetailWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ReportDetailUpdateWithoutDoctorCommissionLogInputObjectSchema), z.lazy(() => ReportDetailUncheckedUpdateWithoutDoctorCommissionLogInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportDetailCreateWithoutDoctorCommissionLogInputObjectSchema), z.lazy(() => ReportDetailUncheckedCreateWithoutDoctorCommissionLogInputObjectSchema)]),
  where: z.lazy(() => ReportDetailWhereInputObjectSchema).optional()
}).strict();
export const ReportDetailUpsertWithoutDoctorCommissionLogInputObjectSchema: z.ZodType<Prisma.ReportDetailUpsertWithoutDoctorCommissionLogInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailUpsertWithoutDoctorCommissionLogInput>;
export const ReportDetailUpsertWithoutDoctorCommissionLogInputObjectZodSchema = makeSchema();
