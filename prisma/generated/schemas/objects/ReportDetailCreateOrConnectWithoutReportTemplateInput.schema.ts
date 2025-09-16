import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportDetailWhereUniqueInputObjectSchema } from './ReportDetailWhereUniqueInput.schema';
import { ReportDetailCreateWithoutReportTemplateInputObjectSchema } from './ReportDetailCreateWithoutReportTemplateInput.schema';
import { ReportDetailUncheckedCreateWithoutReportTemplateInputObjectSchema } from './ReportDetailUncheckedCreateWithoutReportTemplateInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportDetailWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportDetailCreateWithoutReportTemplateInputObjectSchema), z.lazy(() => ReportDetailUncheckedCreateWithoutReportTemplateInputObjectSchema)])
}).strict();
export const ReportDetailCreateOrConnectWithoutReportTemplateInputObjectSchema: z.ZodType<Prisma.ReportDetailCreateOrConnectWithoutReportTemplateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailCreateOrConnectWithoutReportTemplateInput>;
export const ReportDetailCreateOrConnectWithoutReportTemplateInputObjectZodSchema = makeSchema();
