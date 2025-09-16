import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportDetailWhereInputObjectSchema } from './ReportDetailWhereInput.schema';
import { ReportDetailUpdateWithoutDoctorCommissionLogInputObjectSchema } from './ReportDetailUpdateWithoutDoctorCommissionLogInput.schema';
import { ReportDetailUncheckedUpdateWithoutDoctorCommissionLogInputObjectSchema } from './ReportDetailUncheckedUpdateWithoutDoctorCommissionLogInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportDetailWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ReportDetailUpdateWithoutDoctorCommissionLogInputObjectSchema), z.lazy(() => ReportDetailUncheckedUpdateWithoutDoctorCommissionLogInputObjectSchema)])
}).strict();
export const ReportDetailUpdateToOneWithWhereWithoutDoctorCommissionLogInputObjectSchema: z.ZodType<Prisma.ReportDetailUpdateToOneWithWhereWithoutDoctorCommissionLogInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailUpdateToOneWithWhereWithoutDoctorCommissionLogInput>;
export const ReportDetailUpdateToOneWithWhereWithoutDoctorCommissionLogInputObjectZodSchema = makeSchema();
