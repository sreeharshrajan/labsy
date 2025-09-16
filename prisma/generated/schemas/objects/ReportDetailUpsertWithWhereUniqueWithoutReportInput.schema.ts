import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportDetailWhereUniqueInputObjectSchema } from './ReportDetailWhereUniqueInput.schema';
import { ReportDetailUpdateWithoutReportInputObjectSchema } from './ReportDetailUpdateWithoutReportInput.schema';
import { ReportDetailUncheckedUpdateWithoutReportInputObjectSchema } from './ReportDetailUncheckedUpdateWithoutReportInput.schema';
import { ReportDetailCreateWithoutReportInputObjectSchema } from './ReportDetailCreateWithoutReportInput.schema';
import { ReportDetailUncheckedCreateWithoutReportInputObjectSchema } from './ReportDetailUncheckedCreateWithoutReportInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportDetailWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportDetailUpdateWithoutReportInputObjectSchema), z.lazy(() => ReportDetailUncheckedUpdateWithoutReportInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportDetailCreateWithoutReportInputObjectSchema), z.lazy(() => ReportDetailUncheckedCreateWithoutReportInputObjectSchema)])
}).strict();
export const ReportDetailUpsertWithWhereUniqueWithoutReportInputObjectSchema: z.ZodType<Prisma.ReportDetailUpsertWithWhereUniqueWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailUpsertWithWhereUniqueWithoutReportInput>;
export const ReportDetailUpsertWithWhereUniqueWithoutReportInputObjectZodSchema = makeSchema();
