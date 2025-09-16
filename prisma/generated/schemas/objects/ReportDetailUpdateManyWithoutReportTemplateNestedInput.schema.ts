import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportDetailCreateWithoutReportTemplateInputObjectSchema } from './ReportDetailCreateWithoutReportTemplateInput.schema';
import { ReportDetailUncheckedCreateWithoutReportTemplateInputObjectSchema } from './ReportDetailUncheckedCreateWithoutReportTemplateInput.schema';
import { ReportDetailCreateOrConnectWithoutReportTemplateInputObjectSchema } from './ReportDetailCreateOrConnectWithoutReportTemplateInput.schema';
import { ReportDetailUpsertWithWhereUniqueWithoutReportTemplateInputObjectSchema } from './ReportDetailUpsertWithWhereUniqueWithoutReportTemplateInput.schema';
import { ReportDetailCreateManyReportTemplateInputEnvelopeObjectSchema } from './ReportDetailCreateManyReportTemplateInputEnvelope.schema';
import { ReportDetailWhereUniqueInputObjectSchema } from './ReportDetailWhereUniqueInput.schema';
import { ReportDetailUpdateWithWhereUniqueWithoutReportTemplateInputObjectSchema } from './ReportDetailUpdateWithWhereUniqueWithoutReportTemplateInput.schema';
import { ReportDetailUpdateManyWithWhereWithoutReportTemplateInputObjectSchema } from './ReportDetailUpdateManyWithWhereWithoutReportTemplateInput.schema';
import { ReportDetailScalarWhereInputObjectSchema } from './ReportDetailScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportDetailCreateWithoutReportTemplateInputObjectSchema), z.lazy(() => ReportDetailCreateWithoutReportTemplateInputObjectSchema).array(), z.lazy(() => ReportDetailUncheckedCreateWithoutReportTemplateInputObjectSchema), z.lazy(() => ReportDetailUncheckedCreateWithoutReportTemplateInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportDetailCreateOrConnectWithoutReportTemplateInputObjectSchema), z.lazy(() => ReportDetailCreateOrConnectWithoutReportTemplateInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportDetailUpsertWithWhereUniqueWithoutReportTemplateInputObjectSchema), z.lazy(() => ReportDetailUpsertWithWhereUniqueWithoutReportTemplateInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportDetailCreateManyReportTemplateInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportDetailWhereUniqueInputObjectSchema), z.lazy(() => ReportDetailWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportDetailWhereUniqueInputObjectSchema), z.lazy(() => ReportDetailWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportDetailWhereUniqueInputObjectSchema), z.lazy(() => ReportDetailWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportDetailWhereUniqueInputObjectSchema), z.lazy(() => ReportDetailWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportDetailUpdateWithWhereUniqueWithoutReportTemplateInputObjectSchema), z.lazy(() => ReportDetailUpdateWithWhereUniqueWithoutReportTemplateInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportDetailUpdateManyWithWhereWithoutReportTemplateInputObjectSchema), z.lazy(() => ReportDetailUpdateManyWithWhereWithoutReportTemplateInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportDetailScalarWhereInputObjectSchema), z.lazy(() => ReportDetailScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportDetailUpdateManyWithoutReportTemplateNestedInputObjectSchema: z.ZodType<Prisma.ReportDetailUpdateManyWithoutReportTemplateNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailUpdateManyWithoutReportTemplateNestedInput>;
export const ReportDetailUpdateManyWithoutReportTemplateNestedInputObjectZodSchema = makeSchema();
