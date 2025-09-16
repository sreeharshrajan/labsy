import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportDetailWhereUniqueInputObjectSchema } from './ReportDetailWhereUniqueInput.schema';
import { ReportDetailUpdateWithoutReportTemplateInputObjectSchema } from './ReportDetailUpdateWithoutReportTemplateInput.schema';
import { ReportDetailUncheckedUpdateWithoutReportTemplateInputObjectSchema } from './ReportDetailUncheckedUpdateWithoutReportTemplateInput.schema';
import { ReportDetailCreateWithoutReportTemplateInputObjectSchema } from './ReportDetailCreateWithoutReportTemplateInput.schema';
import { ReportDetailUncheckedCreateWithoutReportTemplateInputObjectSchema } from './ReportDetailUncheckedCreateWithoutReportTemplateInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportDetailWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportDetailUpdateWithoutReportTemplateInputObjectSchema), z.lazy(() => ReportDetailUncheckedUpdateWithoutReportTemplateInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportDetailCreateWithoutReportTemplateInputObjectSchema), z.lazy(() => ReportDetailUncheckedCreateWithoutReportTemplateInputObjectSchema)])
}).strict();
export const ReportDetailUpsertWithWhereUniqueWithoutReportTemplateInputObjectSchema: z.ZodType<Prisma.ReportDetailUpsertWithWhereUniqueWithoutReportTemplateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailUpsertWithWhereUniqueWithoutReportTemplateInput>;
export const ReportDetailUpsertWithWhereUniqueWithoutReportTemplateInputObjectZodSchema = makeSchema();
