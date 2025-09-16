import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportDetailScalarWhereInputObjectSchema } from './ReportDetailScalarWhereInput.schema';
import { ReportDetailUpdateManyMutationInputObjectSchema } from './ReportDetailUpdateManyMutationInput.schema';
import { ReportDetailUncheckedUpdateManyWithoutReportInputObjectSchema } from './ReportDetailUncheckedUpdateManyWithoutReportInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportDetailScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportDetailUpdateManyMutationInputObjectSchema), z.lazy(() => ReportDetailUncheckedUpdateManyWithoutReportInputObjectSchema)])
}).strict();
export const ReportDetailUpdateManyWithWhereWithoutReportInputObjectSchema: z.ZodType<Prisma.ReportDetailUpdateManyWithWhereWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailUpdateManyWithWhereWithoutReportInput>;
export const ReportDetailUpdateManyWithWhereWithoutReportInputObjectZodSchema = makeSchema();
