import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportChangeLogScalarWhereInputObjectSchema } from './ReportChangeLogScalarWhereInput.schema';
import { ReportChangeLogUpdateManyMutationInputObjectSchema } from './ReportChangeLogUpdateManyMutationInput.schema';
import { ReportChangeLogUncheckedUpdateManyWithoutReportInputObjectSchema } from './ReportChangeLogUncheckedUpdateManyWithoutReportInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportChangeLogScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportChangeLogUpdateManyMutationInputObjectSchema), z.lazy(() => ReportChangeLogUncheckedUpdateManyWithoutReportInputObjectSchema)])
}).strict();
export const ReportChangeLogUpdateManyWithWhereWithoutReportInputObjectSchema: z.ZodType<Prisma.ReportChangeLogUpdateManyWithWhereWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportChangeLogUpdateManyWithWhereWithoutReportInput>;
export const ReportChangeLogUpdateManyWithWhereWithoutReportInputObjectZodSchema = makeSchema();
