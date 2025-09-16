import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportTemplateUpdateWithoutReportParameterInputObjectSchema } from './ReportTemplateUpdateWithoutReportParameterInput.schema';
import { ReportTemplateUncheckedUpdateWithoutReportParameterInputObjectSchema } from './ReportTemplateUncheckedUpdateWithoutReportParameterInput.schema';
import { ReportTemplateCreateWithoutReportParameterInputObjectSchema } from './ReportTemplateCreateWithoutReportParameterInput.schema';
import { ReportTemplateUncheckedCreateWithoutReportParameterInputObjectSchema } from './ReportTemplateUncheckedCreateWithoutReportParameterInput.schema';
import { ReportTemplateWhereInputObjectSchema } from './ReportTemplateWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ReportTemplateUpdateWithoutReportParameterInputObjectSchema), z.lazy(() => ReportTemplateUncheckedUpdateWithoutReportParameterInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportTemplateCreateWithoutReportParameterInputObjectSchema), z.lazy(() => ReportTemplateUncheckedCreateWithoutReportParameterInputObjectSchema)]),
  where: z.lazy(() => ReportTemplateWhereInputObjectSchema).optional()
}).strict();
export const ReportTemplateUpsertWithoutReportParameterInputObjectSchema: z.ZodType<Prisma.ReportTemplateUpsertWithoutReportParameterInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateUpsertWithoutReportParameterInput>;
export const ReportTemplateUpsertWithoutReportParameterInputObjectZodSchema = makeSchema();
