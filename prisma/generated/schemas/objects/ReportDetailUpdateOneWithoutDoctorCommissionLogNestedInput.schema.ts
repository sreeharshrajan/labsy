import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportDetailCreateWithoutDoctorCommissionLogInputObjectSchema } from './ReportDetailCreateWithoutDoctorCommissionLogInput.schema';
import { ReportDetailUncheckedCreateWithoutDoctorCommissionLogInputObjectSchema } from './ReportDetailUncheckedCreateWithoutDoctorCommissionLogInput.schema';
import { ReportDetailCreateOrConnectWithoutDoctorCommissionLogInputObjectSchema } from './ReportDetailCreateOrConnectWithoutDoctorCommissionLogInput.schema';
import { ReportDetailUpsertWithoutDoctorCommissionLogInputObjectSchema } from './ReportDetailUpsertWithoutDoctorCommissionLogInput.schema';
import { ReportDetailWhereInputObjectSchema } from './ReportDetailWhereInput.schema';
import { ReportDetailWhereUniqueInputObjectSchema } from './ReportDetailWhereUniqueInput.schema';
import { ReportDetailUpdateToOneWithWhereWithoutDoctorCommissionLogInputObjectSchema } from './ReportDetailUpdateToOneWithWhereWithoutDoctorCommissionLogInput.schema';
import { ReportDetailUpdateWithoutDoctorCommissionLogInputObjectSchema } from './ReportDetailUpdateWithoutDoctorCommissionLogInput.schema';
import { ReportDetailUncheckedUpdateWithoutDoctorCommissionLogInputObjectSchema } from './ReportDetailUncheckedUpdateWithoutDoctorCommissionLogInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportDetailCreateWithoutDoctorCommissionLogInputObjectSchema), z.lazy(() => ReportDetailUncheckedCreateWithoutDoctorCommissionLogInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportDetailCreateOrConnectWithoutDoctorCommissionLogInputObjectSchema).optional(),
  upsert: z.lazy(() => ReportDetailUpsertWithoutDoctorCommissionLogInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ReportDetailWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ReportDetailWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ReportDetailWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ReportDetailUpdateToOneWithWhereWithoutDoctorCommissionLogInputObjectSchema), z.lazy(() => ReportDetailUpdateWithoutDoctorCommissionLogInputObjectSchema), z.lazy(() => ReportDetailUncheckedUpdateWithoutDoctorCommissionLogInputObjectSchema)]).optional()
}).strict();
export const ReportDetailUpdateOneWithoutDoctorCommissionLogNestedInputObjectSchema: z.ZodType<Prisma.ReportDetailUpdateOneWithoutDoctorCommissionLogNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailUpdateOneWithoutDoctorCommissionLogNestedInput>;
export const ReportDetailUpdateOneWithoutDoctorCommissionLogNestedInputObjectZodSchema = makeSchema();
