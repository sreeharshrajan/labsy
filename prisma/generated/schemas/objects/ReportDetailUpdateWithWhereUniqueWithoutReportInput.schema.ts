import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportDetailWhereUniqueInputObjectSchema } from './ReportDetailWhereUniqueInput.schema';
import { ReportDetailUpdateWithoutReportInputObjectSchema } from './ReportDetailUpdateWithoutReportInput.schema';
import { ReportDetailUncheckedUpdateWithoutReportInputObjectSchema } from './ReportDetailUncheckedUpdateWithoutReportInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportDetailWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportDetailUpdateWithoutReportInputObjectSchema), z.lazy(() => ReportDetailUncheckedUpdateWithoutReportInputObjectSchema)])
}).strict();
export const ReportDetailUpdateWithWhereUniqueWithoutReportInputObjectSchema: z.ZodType<Prisma.ReportDetailUpdateWithWhereUniqueWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailUpdateWithWhereUniqueWithoutReportInput>;
export const ReportDetailUpdateWithWhereUniqueWithoutReportInputObjectZodSchema = makeSchema();
