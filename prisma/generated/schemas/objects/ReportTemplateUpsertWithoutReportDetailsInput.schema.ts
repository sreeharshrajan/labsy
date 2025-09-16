import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportTemplateUpdateWithoutReportDetailsInputObjectSchema } from './ReportTemplateUpdateWithoutReportDetailsInput.schema';
import { ReportTemplateUncheckedUpdateWithoutReportDetailsInputObjectSchema } from './ReportTemplateUncheckedUpdateWithoutReportDetailsInput.schema';
import { ReportTemplateCreateWithoutReportDetailsInputObjectSchema } from './ReportTemplateCreateWithoutReportDetailsInput.schema';
import { ReportTemplateUncheckedCreateWithoutReportDetailsInputObjectSchema } from './ReportTemplateUncheckedCreateWithoutReportDetailsInput.schema';
import { ReportTemplateWhereInputObjectSchema } from './ReportTemplateWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ReportTemplateUpdateWithoutReportDetailsInputObjectSchema), z.lazy(() => ReportTemplateUncheckedUpdateWithoutReportDetailsInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportTemplateCreateWithoutReportDetailsInputObjectSchema), z.lazy(() => ReportTemplateUncheckedCreateWithoutReportDetailsInputObjectSchema)]),
  where: z.lazy(() => ReportTemplateWhereInputObjectSchema).optional()
}).strict();
export const ReportTemplateUpsertWithoutReportDetailsInputObjectSchema: z.ZodType<Prisma.ReportTemplateUpsertWithoutReportDetailsInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateUpsertWithoutReportDetailsInput>;
export const ReportTemplateUpsertWithoutReportDetailsInputObjectZodSchema = makeSchema();
