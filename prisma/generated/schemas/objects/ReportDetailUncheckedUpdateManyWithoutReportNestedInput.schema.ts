import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportDetailCreateWithoutReportInputObjectSchema } from './ReportDetailCreateWithoutReportInput.schema';
import { ReportDetailUncheckedCreateWithoutReportInputObjectSchema } from './ReportDetailUncheckedCreateWithoutReportInput.schema';
import { ReportDetailCreateOrConnectWithoutReportInputObjectSchema } from './ReportDetailCreateOrConnectWithoutReportInput.schema';
import { ReportDetailUpsertWithWhereUniqueWithoutReportInputObjectSchema } from './ReportDetailUpsertWithWhereUniqueWithoutReportInput.schema';
import { ReportDetailCreateManyReportInputEnvelopeObjectSchema } from './ReportDetailCreateManyReportInputEnvelope.schema';
import { ReportDetailWhereUniqueInputObjectSchema } from './ReportDetailWhereUniqueInput.schema';
import { ReportDetailUpdateWithWhereUniqueWithoutReportInputObjectSchema } from './ReportDetailUpdateWithWhereUniqueWithoutReportInput.schema';
import { ReportDetailUpdateManyWithWhereWithoutReportInputObjectSchema } from './ReportDetailUpdateManyWithWhereWithoutReportInput.schema';
import { ReportDetailScalarWhereInputObjectSchema } from './ReportDetailScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportDetailCreateWithoutReportInputObjectSchema), z.lazy(() => ReportDetailCreateWithoutReportInputObjectSchema).array(), z.lazy(() => ReportDetailUncheckedCreateWithoutReportInputObjectSchema), z.lazy(() => ReportDetailUncheckedCreateWithoutReportInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportDetailCreateOrConnectWithoutReportInputObjectSchema), z.lazy(() => ReportDetailCreateOrConnectWithoutReportInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportDetailUpsertWithWhereUniqueWithoutReportInputObjectSchema), z.lazy(() => ReportDetailUpsertWithWhereUniqueWithoutReportInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportDetailCreateManyReportInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportDetailWhereUniqueInputObjectSchema), z.lazy(() => ReportDetailWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportDetailWhereUniqueInputObjectSchema), z.lazy(() => ReportDetailWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportDetailWhereUniqueInputObjectSchema), z.lazy(() => ReportDetailWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportDetailWhereUniqueInputObjectSchema), z.lazy(() => ReportDetailWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportDetailUpdateWithWhereUniqueWithoutReportInputObjectSchema), z.lazy(() => ReportDetailUpdateWithWhereUniqueWithoutReportInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportDetailUpdateManyWithWhereWithoutReportInputObjectSchema), z.lazy(() => ReportDetailUpdateManyWithWhereWithoutReportInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportDetailScalarWhereInputObjectSchema), z.lazy(() => ReportDetailScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportDetailUncheckedUpdateManyWithoutReportNestedInputObjectSchema: z.ZodType<Prisma.ReportDetailUncheckedUpdateManyWithoutReportNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailUncheckedUpdateManyWithoutReportNestedInput>;
export const ReportDetailUncheckedUpdateManyWithoutReportNestedInputObjectZodSchema = makeSchema();
