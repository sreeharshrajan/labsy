import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportChangeLogCreateWithoutReportInputObjectSchema } from './ReportChangeLogCreateWithoutReportInput.schema';
import { ReportChangeLogUncheckedCreateWithoutReportInputObjectSchema } from './ReportChangeLogUncheckedCreateWithoutReportInput.schema';
import { ReportChangeLogCreateOrConnectWithoutReportInputObjectSchema } from './ReportChangeLogCreateOrConnectWithoutReportInput.schema';
import { ReportChangeLogCreateManyReportInputEnvelopeObjectSchema } from './ReportChangeLogCreateManyReportInputEnvelope.schema';
import { ReportChangeLogWhereUniqueInputObjectSchema } from './ReportChangeLogWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportChangeLogCreateWithoutReportInputObjectSchema), z.lazy(() => ReportChangeLogCreateWithoutReportInputObjectSchema).array(), z.lazy(() => ReportChangeLogUncheckedCreateWithoutReportInputObjectSchema), z.lazy(() => ReportChangeLogUncheckedCreateWithoutReportInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportChangeLogCreateOrConnectWithoutReportInputObjectSchema), z.lazy(() => ReportChangeLogCreateOrConnectWithoutReportInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportChangeLogCreateManyReportInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportChangeLogWhereUniqueInputObjectSchema), z.lazy(() => ReportChangeLogWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportChangeLogCreateNestedManyWithoutReportInputObjectSchema: z.ZodType<Prisma.ReportChangeLogCreateNestedManyWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportChangeLogCreateNestedManyWithoutReportInput>;
export const ReportChangeLogCreateNestedManyWithoutReportInputObjectZodSchema = makeSchema();
