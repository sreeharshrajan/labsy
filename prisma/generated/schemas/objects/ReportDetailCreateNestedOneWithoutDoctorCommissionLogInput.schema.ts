import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportDetailCreateWithoutDoctorCommissionLogInputObjectSchema } from './ReportDetailCreateWithoutDoctorCommissionLogInput.schema';
import { ReportDetailUncheckedCreateWithoutDoctorCommissionLogInputObjectSchema } from './ReportDetailUncheckedCreateWithoutDoctorCommissionLogInput.schema';
import { ReportDetailCreateOrConnectWithoutDoctorCommissionLogInputObjectSchema } from './ReportDetailCreateOrConnectWithoutDoctorCommissionLogInput.schema';
import { ReportDetailWhereUniqueInputObjectSchema } from './ReportDetailWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportDetailCreateWithoutDoctorCommissionLogInputObjectSchema), z.lazy(() => ReportDetailUncheckedCreateWithoutDoctorCommissionLogInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportDetailCreateOrConnectWithoutDoctorCommissionLogInputObjectSchema).optional(),
  connect: z.lazy(() => ReportDetailWhereUniqueInputObjectSchema).optional()
}).strict();
export const ReportDetailCreateNestedOneWithoutDoctorCommissionLogInputObjectSchema: z.ZodType<Prisma.ReportDetailCreateNestedOneWithoutDoctorCommissionLogInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailCreateNestedOneWithoutDoctorCommissionLogInput>;
export const ReportDetailCreateNestedOneWithoutDoctorCommissionLogInputObjectZodSchema = makeSchema();
