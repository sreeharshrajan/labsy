import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportDetailWhereUniqueInputObjectSchema } from './ReportDetailWhereUniqueInput.schema';
import { ReportDetailCreateWithoutReportInputObjectSchema } from './ReportDetailCreateWithoutReportInput.schema';
import { ReportDetailUncheckedCreateWithoutReportInputObjectSchema } from './ReportDetailUncheckedCreateWithoutReportInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportDetailWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportDetailCreateWithoutReportInputObjectSchema), z.lazy(() => ReportDetailUncheckedCreateWithoutReportInputObjectSchema)])
}).strict();
export const ReportDetailCreateOrConnectWithoutReportInputObjectSchema: z.ZodType<Prisma.ReportDetailCreateOrConnectWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailCreateOrConnectWithoutReportInput>;
export const ReportDetailCreateOrConnectWithoutReportInputObjectZodSchema = makeSchema();
