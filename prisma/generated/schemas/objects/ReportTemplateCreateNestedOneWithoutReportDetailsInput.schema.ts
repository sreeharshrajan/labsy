import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportTemplateCreateWithoutReportDetailsInputObjectSchema } from './ReportTemplateCreateWithoutReportDetailsInput.schema';
import { ReportTemplateUncheckedCreateWithoutReportDetailsInputObjectSchema } from './ReportTemplateUncheckedCreateWithoutReportDetailsInput.schema';
import { ReportTemplateCreateOrConnectWithoutReportDetailsInputObjectSchema } from './ReportTemplateCreateOrConnectWithoutReportDetailsInput.schema';
import { ReportTemplateWhereUniqueInputObjectSchema } from './ReportTemplateWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportTemplateCreateWithoutReportDetailsInputObjectSchema), z.lazy(() => ReportTemplateUncheckedCreateWithoutReportDetailsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportTemplateCreateOrConnectWithoutReportDetailsInputObjectSchema).optional(),
  connect: z.lazy(() => ReportTemplateWhereUniqueInputObjectSchema).optional()
}).strict();
export const ReportTemplateCreateNestedOneWithoutReportDetailsInputObjectSchema: z.ZodType<Prisma.ReportTemplateCreateNestedOneWithoutReportDetailsInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateCreateNestedOneWithoutReportDetailsInput>;
export const ReportTemplateCreateNestedOneWithoutReportDetailsInputObjectZodSchema = makeSchema();
