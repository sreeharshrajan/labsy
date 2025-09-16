import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportTemplateWhereUniqueInputObjectSchema } from './ReportTemplateWhereUniqueInput.schema';
import { ReportTemplateCreateWithoutReportParameterInputObjectSchema } from './ReportTemplateCreateWithoutReportParameterInput.schema';
import { ReportTemplateUncheckedCreateWithoutReportParameterInputObjectSchema } from './ReportTemplateUncheckedCreateWithoutReportParameterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportTemplateWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportTemplateCreateWithoutReportParameterInputObjectSchema), z.lazy(() => ReportTemplateUncheckedCreateWithoutReportParameterInputObjectSchema)])
}).strict();
export const ReportTemplateCreateOrConnectWithoutReportParameterInputObjectSchema: z.ZodType<Prisma.ReportTemplateCreateOrConnectWithoutReportParameterInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateCreateOrConnectWithoutReportParameterInput>;
export const ReportTemplateCreateOrConnectWithoutReportParameterInputObjectZodSchema = makeSchema();
