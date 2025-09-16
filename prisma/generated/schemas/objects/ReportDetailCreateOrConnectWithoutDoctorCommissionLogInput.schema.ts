import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportDetailWhereUniqueInputObjectSchema } from './ReportDetailWhereUniqueInput.schema';
import { ReportDetailCreateWithoutDoctorCommissionLogInputObjectSchema } from './ReportDetailCreateWithoutDoctorCommissionLogInput.schema';
import { ReportDetailUncheckedCreateWithoutDoctorCommissionLogInputObjectSchema } from './ReportDetailUncheckedCreateWithoutDoctorCommissionLogInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportDetailWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportDetailCreateWithoutDoctorCommissionLogInputObjectSchema), z.lazy(() => ReportDetailUncheckedCreateWithoutDoctorCommissionLogInputObjectSchema)])
}).strict();
export const ReportDetailCreateOrConnectWithoutDoctorCommissionLogInputObjectSchema: z.ZodType<Prisma.ReportDetailCreateOrConnectWithoutDoctorCommissionLogInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailCreateOrConnectWithoutDoctorCommissionLogInput>;
export const ReportDetailCreateOrConnectWithoutDoctorCommissionLogInputObjectZodSchema = makeSchema();
