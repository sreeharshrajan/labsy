import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportTemplateWhereInputObjectSchema } from './ReportTemplateWhereInput.schema';
import { ReportTemplateUpdateWithoutReportParameterInputObjectSchema } from './ReportTemplateUpdateWithoutReportParameterInput.schema';
import { ReportTemplateUncheckedUpdateWithoutReportParameterInputObjectSchema } from './ReportTemplateUncheckedUpdateWithoutReportParameterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportTemplateWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ReportTemplateUpdateWithoutReportParameterInputObjectSchema), z.lazy(() => ReportTemplateUncheckedUpdateWithoutReportParameterInputObjectSchema)])
}).strict();
export const ReportTemplateUpdateToOneWithWhereWithoutReportParameterInputObjectSchema: z.ZodType<Prisma.ReportTemplateUpdateToOneWithWhereWithoutReportParameterInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateUpdateToOneWithWhereWithoutReportParameterInput>;
export const ReportTemplateUpdateToOneWithWhereWithoutReportParameterInputObjectZodSchema = makeSchema();
