import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportTemplateCreateWithoutReportParameterInputObjectSchema } from './ReportTemplateCreateWithoutReportParameterInput.schema';
import { ReportTemplateUncheckedCreateWithoutReportParameterInputObjectSchema } from './ReportTemplateUncheckedCreateWithoutReportParameterInput.schema';
import { ReportTemplateCreateOrConnectWithoutReportParameterInputObjectSchema } from './ReportTemplateCreateOrConnectWithoutReportParameterInput.schema';
import { ReportTemplateUpsertWithoutReportParameterInputObjectSchema } from './ReportTemplateUpsertWithoutReportParameterInput.schema';
import { ReportTemplateWhereUniqueInputObjectSchema } from './ReportTemplateWhereUniqueInput.schema';
import { ReportTemplateUpdateToOneWithWhereWithoutReportParameterInputObjectSchema } from './ReportTemplateUpdateToOneWithWhereWithoutReportParameterInput.schema';
import { ReportTemplateUpdateWithoutReportParameterInputObjectSchema } from './ReportTemplateUpdateWithoutReportParameterInput.schema';
import { ReportTemplateUncheckedUpdateWithoutReportParameterInputObjectSchema } from './ReportTemplateUncheckedUpdateWithoutReportParameterInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportTemplateCreateWithoutReportParameterInputObjectSchema), z.lazy(() => ReportTemplateUncheckedCreateWithoutReportParameterInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportTemplateCreateOrConnectWithoutReportParameterInputObjectSchema).optional(),
  upsert: z.lazy(() => ReportTemplateUpsertWithoutReportParameterInputObjectSchema).optional(),
  connect: z.lazy(() => ReportTemplateWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ReportTemplateUpdateToOneWithWhereWithoutReportParameterInputObjectSchema), z.lazy(() => ReportTemplateUpdateWithoutReportParameterInputObjectSchema), z.lazy(() => ReportTemplateUncheckedUpdateWithoutReportParameterInputObjectSchema)]).optional()
}).strict();
export const ReportTemplateUpdateOneRequiredWithoutReportParameterNestedInputObjectSchema: z.ZodType<Prisma.ReportTemplateUpdateOneRequiredWithoutReportParameterNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateUpdateOneRequiredWithoutReportParameterNestedInput>;
export const ReportTemplateUpdateOneRequiredWithoutReportParameterNestedInputObjectZodSchema = makeSchema();
