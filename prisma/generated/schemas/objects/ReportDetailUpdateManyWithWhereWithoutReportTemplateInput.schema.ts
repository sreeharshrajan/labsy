import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportDetailScalarWhereInputObjectSchema } from './ReportDetailScalarWhereInput.schema';
import { ReportDetailUpdateManyMutationInputObjectSchema } from './ReportDetailUpdateManyMutationInput.schema';
import { ReportDetailUncheckedUpdateManyWithoutReportTemplateInputObjectSchema } from './ReportDetailUncheckedUpdateManyWithoutReportTemplateInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportDetailScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportDetailUpdateManyMutationInputObjectSchema), z.lazy(() => ReportDetailUncheckedUpdateManyWithoutReportTemplateInputObjectSchema)])
}).strict();
export const ReportDetailUpdateManyWithWhereWithoutReportTemplateInputObjectSchema: z.ZodType<Prisma.ReportDetailUpdateManyWithWhereWithoutReportTemplateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailUpdateManyWithWhereWithoutReportTemplateInput>;
export const ReportDetailUpdateManyWithWhereWithoutReportTemplateInputObjectZodSchema = makeSchema();
