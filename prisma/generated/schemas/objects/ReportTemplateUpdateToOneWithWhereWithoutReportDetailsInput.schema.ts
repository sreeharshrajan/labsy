import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportTemplateWhereInputObjectSchema } from './ReportTemplateWhereInput.schema';
import { ReportTemplateUpdateWithoutReportDetailsInputObjectSchema } from './ReportTemplateUpdateWithoutReportDetailsInput.schema';
import { ReportTemplateUncheckedUpdateWithoutReportDetailsInputObjectSchema } from './ReportTemplateUncheckedUpdateWithoutReportDetailsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportTemplateWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ReportTemplateUpdateWithoutReportDetailsInputObjectSchema), z.lazy(() => ReportTemplateUncheckedUpdateWithoutReportDetailsInputObjectSchema)])
}).strict();
export const ReportTemplateUpdateToOneWithWhereWithoutReportDetailsInputObjectSchema: z.ZodType<Prisma.ReportTemplateUpdateToOneWithWhereWithoutReportDetailsInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateUpdateToOneWithWhereWithoutReportDetailsInput>;
export const ReportTemplateUpdateToOneWithWhereWithoutReportDetailsInputObjectZodSchema = makeSchema();
