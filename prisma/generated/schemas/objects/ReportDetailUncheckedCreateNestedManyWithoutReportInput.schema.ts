import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportDetailCreateWithoutReportInputObjectSchema } from './ReportDetailCreateWithoutReportInput.schema';
import { ReportDetailUncheckedCreateWithoutReportInputObjectSchema } from './ReportDetailUncheckedCreateWithoutReportInput.schema';
import { ReportDetailCreateOrConnectWithoutReportInputObjectSchema } from './ReportDetailCreateOrConnectWithoutReportInput.schema';
import { ReportDetailCreateManyReportInputEnvelopeObjectSchema } from './ReportDetailCreateManyReportInputEnvelope.schema';
import { ReportDetailWhereUniqueInputObjectSchema } from './ReportDetailWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportDetailCreateWithoutReportInputObjectSchema), z.lazy(() => ReportDetailCreateWithoutReportInputObjectSchema).array(), z.lazy(() => ReportDetailUncheckedCreateWithoutReportInputObjectSchema), z.lazy(() => ReportDetailUncheckedCreateWithoutReportInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportDetailCreateOrConnectWithoutReportInputObjectSchema), z.lazy(() => ReportDetailCreateOrConnectWithoutReportInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportDetailCreateManyReportInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportDetailWhereUniqueInputObjectSchema), z.lazy(() => ReportDetailWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportDetailUncheckedCreateNestedManyWithoutReportInputObjectSchema: z.ZodType<Prisma.ReportDetailUncheckedCreateNestedManyWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailUncheckedCreateNestedManyWithoutReportInput>;
export const ReportDetailUncheckedCreateNestedManyWithoutReportInputObjectZodSchema = makeSchema();
