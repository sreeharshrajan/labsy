import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportChangeLogWhereUniqueInputObjectSchema } from './ReportChangeLogWhereUniqueInput.schema';
import { ReportChangeLogUpdateWithoutReportInputObjectSchema } from './ReportChangeLogUpdateWithoutReportInput.schema';
import { ReportChangeLogUncheckedUpdateWithoutReportInputObjectSchema } from './ReportChangeLogUncheckedUpdateWithoutReportInput.schema';
import { ReportChangeLogCreateWithoutReportInputObjectSchema } from './ReportChangeLogCreateWithoutReportInput.schema';
import { ReportChangeLogUncheckedCreateWithoutReportInputObjectSchema } from './ReportChangeLogUncheckedCreateWithoutReportInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportChangeLogWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportChangeLogUpdateWithoutReportInputObjectSchema), z.lazy(() => ReportChangeLogUncheckedUpdateWithoutReportInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportChangeLogCreateWithoutReportInputObjectSchema), z.lazy(() => ReportChangeLogUncheckedCreateWithoutReportInputObjectSchema)])
}).strict();
export const ReportChangeLogUpsertWithWhereUniqueWithoutReportInputObjectSchema: z.ZodType<Prisma.ReportChangeLogUpsertWithWhereUniqueWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportChangeLogUpsertWithWhereUniqueWithoutReportInput>;
export const ReportChangeLogUpsertWithWhereUniqueWithoutReportInputObjectZodSchema = makeSchema();
