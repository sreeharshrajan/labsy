import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportTemplateCreateWithoutReportParameterInputObjectSchema } from './ReportTemplateCreateWithoutReportParameterInput.schema';
import { ReportTemplateUncheckedCreateWithoutReportParameterInputObjectSchema } from './ReportTemplateUncheckedCreateWithoutReportParameterInput.schema';
import { ReportTemplateCreateOrConnectWithoutReportParameterInputObjectSchema } from './ReportTemplateCreateOrConnectWithoutReportParameterInput.schema';
import { ReportTemplateWhereUniqueInputObjectSchema } from './ReportTemplateWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportTemplateCreateWithoutReportParameterInputObjectSchema), z.lazy(() => ReportTemplateUncheckedCreateWithoutReportParameterInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportTemplateCreateOrConnectWithoutReportParameterInputObjectSchema).optional(),
  connect: z.lazy(() => ReportTemplateWhereUniqueInputObjectSchema).optional()
}).strict();
export const ReportTemplateCreateNestedOneWithoutReportParameterInputObjectSchema: z.ZodType<Prisma.ReportTemplateCreateNestedOneWithoutReportParameterInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateCreateNestedOneWithoutReportParameterInput>;
export const ReportTemplateCreateNestedOneWithoutReportParameterInputObjectZodSchema = makeSchema();
