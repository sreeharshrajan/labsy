import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportTemplateCreateWithoutReportDetailsInputObjectSchema } from './ReportTemplateCreateWithoutReportDetailsInput.schema';
import { ReportTemplateUncheckedCreateWithoutReportDetailsInputObjectSchema } from './ReportTemplateUncheckedCreateWithoutReportDetailsInput.schema';
import { ReportTemplateCreateOrConnectWithoutReportDetailsInputObjectSchema } from './ReportTemplateCreateOrConnectWithoutReportDetailsInput.schema';
import { ReportTemplateUpsertWithoutReportDetailsInputObjectSchema } from './ReportTemplateUpsertWithoutReportDetailsInput.schema';
import { ReportTemplateWhereInputObjectSchema } from './ReportTemplateWhereInput.schema';
import { ReportTemplateWhereUniqueInputObjectSchema } from './ReportTemplateWhereUniqueInput.schema';
import { ReportTemplateUpdateToOneWithWhereWithoutReportDetailsInputObjectSchema } from './ReportTemplateUpdateToOneWithWhereWithoutReportDetailsInput.schema';
import { ReportTemplateUpdateWithoutReportDetailsInputObjectSchema } from './ReportTemplateUpdateWithoutReportDetailsInput.schema';
import { ReportTemplateUncheckedUpdateWithoutReportDetailsInputObjectSchema } from './ReportTemplateUncheckedUpdateWithoutReportDetailsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportTemplateCreateWithoutReportDetailsInputObjectSchema), z.lazy(() => ReportTemplateUncheckedCreateWithoutReportDetailsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportTemplateCreateOrConnectWithoutReportDetailsInputObjectSchema).optional(),
  upsert: z.lazy(() => ReportTemplateUpsertWithoutReportDetailsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ReportTemplateWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ReportTemplateWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ReportTemplateWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ReportTemplateUpdateToOneWithWhereWithoutReportDetailsInputObjectSchema), z.lazy(() => ReportTemplateUpdateWithoutReportDetailsInputObjectSchema), z.lazy(() => ReportTemplateUncheckedUpdateWithoutReportDetailsInputObjectSchema)]).optional()
}).strict();
export const ReportTemplateUpdateOneWithoutReportDetailsNestedInputObjectSchema: z.ZodType<Prisma.ReportTemplateUpdateOneWithoutReportDetailsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateUpdateOneWithoutReportDetailsNestedInput>;
export const ReportTemplateUpdateOneWithoutReportDetailsNestedInputObjectZodSchema = makeSchema();
