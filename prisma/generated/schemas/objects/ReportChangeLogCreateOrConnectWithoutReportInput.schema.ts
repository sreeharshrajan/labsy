import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportChangeLogWhereUniqueInputObjectSchema } from './ReportChangeLogWhereUniqueInput.schema';
import { ReportChangeLogCreateWithoutReportInputObjectSchema } from './ReportChangeLogCreateWithoutReportInput.schema';
import { ReportChangeLogUncheckedCreateWithoutReportInputObjectSchema } from './ReportChangeLogUncheckedCreateWithoutReportInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportChangeLogWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportChangeLogCreateWithoutReportInputObjectSchema), z.lazy(() => ReportChangeLogUncheckedCreateWithoutReportInputObjectSchema)])
}).strict();
export const ReportChangeLogCreateOrConnectWithoutReportInputObjectSchema: z.ZodType<Prisma.ReportChangeLogCreateOrConnectWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportChangeLogCreateOrConnectWithoutReportInput>;
export const ReportChangeLogCreateOrConnectWithoutReportInputObjectZodSchema = makeSchema();
