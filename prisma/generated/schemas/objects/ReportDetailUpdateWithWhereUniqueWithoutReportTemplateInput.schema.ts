import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportDetailWhereUniqueInputObjectSchema } from './ReportDetailWhereUniqueInput.schema';
import { ReportDetailUpdateWithoutReportTemplateInputObjectSchema } from './ReportDetailUpdateWithoutReportTemplateInput.schema';
import { ReportDetailUncheckedUpdateWithoutReportTemplateInputObjectSchema } from './ReportDetailUncheckedUpdateWithoutReportTemplateInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportDetailWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportDetailUpdateWithoutReportTemplateInputObjectSchema), z.lazy(() => ReportDetailUncheckedUpdateWithoutReportTemplateInputObjectSchema)])
}).strict();
export const ReportDetailUpdateWithWhereUniqueWithoutReportTemplateInputObjectSchema: z.ZodType<Prisma.ReportDetailUpdateWithWhereUniqueWithoutReportTemplateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailUpdateWithWhereUniqueWithoutReportTemplateInput>;
export const ReportDetailUpdateWithWhereUniqueWithoutReportTemplateInputObjectZodSchema = makeSchema();
