import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportDetailCreateWithoutReportTemplateInputObjectSchema } from './ReportDetailCreateWithoutReportTemplateInput.schema';
import { ReportDetailUncheckedCreateWithoutReportTemplateInputObjectSchema } from './ReportDetailUncheckedCreateWithoutReportTemplateInput.schema';
import { ReportDetailCreateOrConnectWithoutReportTemplateInputObjectSchema } from './ReportDetailCreateOrConnectWithoutReportTemplateInput.schema';
import { ReportDetailCreateManyReportTemplateInputEnvelopeObjectSchema } from './ReportDetailCreateManyReportTemplateInputEnvelope.schema';
import { ReportDetailWhereUniqueInputObjectSchema } from './ReportDetailWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportDetailCreateWithoutReportTemplateInputObjectSchema), z.lazy(() => ReportDetailCreateWithoutReportTemplateInputObjectSchema).array(), z.lazy(() => ReportDetailUncheckedCreateWithoutReportTemplateInputObjectSchema), z.lazy(() => ReportDetailUncheckedCreateWithoutReportTemplateInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportDetailCreateOrConnectWithoutReportTemplateInputObjectSchema), z.lazy(() => ReportDetailCreateOrConnectWithoutReportTemplateInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportDetailCreateManyReportTemplateInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportDetailWhereUniqueInputObjectSchema), z.lazy(() => ReportDetailWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportDetailUncheckedCreateNestedManyWithoutReportTemplateInputObjectSchema: z.ZodType<Prisma.ReportDetailUncheckedCreateNestedManyWithoutReportTemplateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailUncheckedCreateNestedManyWithoutReportTemplateInput>;
export const ReportDetailUncheckedCreateNestedManyWithoutReportTemplateInputObjectZodSchema = makeSchema();
