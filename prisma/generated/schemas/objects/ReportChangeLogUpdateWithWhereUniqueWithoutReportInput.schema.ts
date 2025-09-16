import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportChangeLogWhereUniqueInputObjectSchema } from './ReportChangeLogWhereUniqueInput.schema';
import { ReportChangeLogUpdateWithoutReportInputObjectSchema } from './ReportChangeLogUpdateWithoutReportInput.schema';
import { ReportChangeLogUncheckedUpdateWithoutReportInputObjectSchema } from './ReportChangeLogUncheckedUpdateWithoutReportInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportChangeLogWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportChangeLogUpdateWithoutReportInputObjectSchema), z.lazy(() => ReportChangeLogUncheckedUpdateWithoutReportInputObjectSchema)])
}).strict();
export const ReportChangeLogUpdateWithWhereUniqueWithoutReportInputObjectSchema: z.ZodType<Prisma.ReportChangeLogUpdateWithWhereUniqueWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportChangeLogUpdateWithWhereUniqueWithoutReportInput>;
export const ReportChangeLogUpdateWithWhereUniqueWithoutReportInputObjectZodSchema = makeSchema();
