import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportChangeLogCreateWithoutReportInputObjectSchema } from './ReportChangeLogCreateWithoutReportInput.schema';
import { ReportChangeLogUncheckedCreateWithoutReportInputObjectSchema } from './ReportChangeLogUncheckedCreateWithoutReportInput.schema';
import { ReportChangeLogCreateOrConnectWithoutReportInputObjectSchema } from './ReportChangeLogCreateOrConnectWithoutReportInput.schema';
import { ReportChangeLogUpsertWithWhereUniqueWithoutReportInputObjectSchema } from './ReportChangeLogUpsertWithWhereUniqueWithoutReportInput.schema';
import { ReportChangeLogCreateManyReportInputEnvelopeObjectSchema } from './ReportChangeLogCreateManyReportInputEnvelope.schema';
import { ReportChangeLogWhereUniqueInputObjectSchema } from './ReportChangeLogWhereUniqueInput.schema';
import { ReportChangeLogUpdateWithWhereUniqueWithoutReportInputObjectSchema } from './ReportChangeLogUpdateWithWhereUniqueWithoutReportInput.schema';
import { ReportChangeLogUpdateManyWithWhereWithoutReportInputObjectSchema } from './ReportChangeLogUpdateManyWithWhereWithoutReportInput.schema';
import { ReportChangeLogScalarWhereInputObjectSchema } from './ReportChangeLogScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportChangeLogCreateWithoutReportInputObjectSchema), z.lazy(() => ReportChangeLogCreateWithoutReportInputObjectSchema).array(), z.lazy(() => ReportChangeLogUncheckedCreateWithoutReportInputObjectSchema), z.lazy(() => ReportChangeLogUncheckedCreateWithoutReportInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportChangeLogCreateOrConnectWithoutReportInputObjectSchema), z.lazy(() => ReportChangeLogCreateOrConnectWithoutReportInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportChangeLogUpsertWithWhereUniqueWithoutReportInputObjectSchema), z.lazy(() => ReportChangeLogUpsertWithWhereUniqueWithoutReportInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportChangeLogCreateManyReportInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportChangeLogWhereUniqueInputObjectSchema), z.lazy(() => ReportChangeLogWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportChangeLogWhereUniqueInputObjectSchema), z.lazy(() => ReportChangeLogWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportChangeLogWhereUniqueInputObjectSchema), z.lazy(() => ReportChangeLogWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportChangeLogWhereUniqueInputObjectSchema), z.lazy(() => ReportChangeLogWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportChangeLogUpdateWithWhereUniqueWithoutReportInputObjectSchema), z.lazy(() => ReportChangeLogUpdateWithWhereUniqueWithoutReportInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportChangeLogUpdateManyWithWhereWithoutReportInputObjectSchema), z.lazy(() => ReportChangeLogUpdateManyWithWhereWithoutReportInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportChangeLogScalarWhereInputObjectSchema), z.lazy(() => ReportChangeLogScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportChangeLogUncheckedUpdateManyWithoutReportNestedInputObjectSchema: z.ZodType<Prisma.ReportChangeLogUncheckedUpdateManyWithoutReportNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportChangeLogUncheckedUpdateManyWithoutReportNestedInput>;
export const ReportChangeLogUncheckedUpdateManyWithoutReportNestedInputObjectZodSchema = makeSchema();
