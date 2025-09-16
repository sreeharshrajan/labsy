import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportTemplateWhereUniqueInputObjectSchema } from './ReportTemplateWhereUniqueInput.schema';
import { ReportTemplateCreateWithoutReportDetailsInputObjectSchema } from './ReportTemplateCreateWithoutReportDetailsInput.schema';
import { ReportTemplateUncheckedCreateWithoutReportDetailsInputObjectSchema } from './ReportTemplateUncheckedCreateWithoutReportDetailsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportTemplateWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportTemplateCreateWithoutReportDetailsInputObjectSchema), z.lazy(() => ReportTemplateUncheckedCreateWithoutReportDetailsInputObjectSchema)])
}).strict();
export const ReportTemplateCreateOrConnectWithoutReportDetailsInputObjectSchema: z.ZodType<Prisma.ReportTemplateCreateOrConnectWithoutReportDetailsInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateCreateOrConnectWithoutReportDetailsInput>;
export const ReportTemplateCreateOrConnectWithoutReportDetailsInputObjectZodSchema = makeSchema();
