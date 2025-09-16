import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportChangeLogCreateWithoutChangedByInputObjectSchema } from './ReportChangeLogCreateWithoutChangedByInput.schema';
import { ReportChangeLogUncheckedCreateWithoutChangedByInputObjectSchema } from './ReportChangeLogUncheckedCreateWithoutChangedByInput.schema';
import { ReportChangeLogCreateOrConnectWithoutChangedByInputObjectSchema } from './ReportChangeLogCreateOrConnectWithoutChangedByInput.schema';
import { ReportChangeLogUpsertWithWhereUniqueWithoutChangedByInputObjectSchema } from './ReportChangeLogUpsertWithWhereUniqueWithoutChangedByInput.schema';
import { ReportChangeLogCreateManyChangedByInputEnvelopeObjectSchema } from './ReportChangeLogCreateManyChangedByInputEnvelope.schema';
import { ReportChangeLogWhereUniqueInputObjectSchema } from './ReportChangeLogWhereUniqueInput.schema';
import { ReportChangeLogUpdateWithWhereUniqueWithoutChangedByInputObjectSchema } from './ReportChangeLogUpdateWithWhereUniqueWithoutChangedByInput.schema';
import { ReportChangeLogUpdateManyWithWhereWithoutChangedByInputObjectSchema } from './ReportChangeLogUpdateManyWithWhereWithoutChangedByInput.schema';
import { ReportChangeLogScalarWhereInputObjectSchema } from './ReportChangeLogScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportChangeLogCreateWithoutChangedByInputObjectSchema), z.lazy(() => ReportChangeLogCreateWithoutChangedByInputObjectSchema).array(), z.lazy(() => ReportChangeLogUncheckedCreateWithoutChangedByInputObjectSchema), z.lazy(() => ReportChangeLogUncheckedCreateWithoutChangedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportChangeLogCreateOrConnectWithoutChangedByInputObjectSchema), z.lazy(() => ReportChangeLogCreateOrConnectWithoutChangedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportChangeLogUpsertWithWhereUniqueWithoutChangedByInputObjectSchema), z.lazy(() => ReportChangeLogUpsertWithWhereUniqueWithoutChangedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportChangeLogCreateManyChangedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportChangeLogWhereUniqueInputObjectSchema), z.lazy(() => ReportChangeLogWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportChangeLogWhereUniqueInputObjectSchema), z.lazy(() => ReportChangeLogWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportChangeLogWhereUniqueInputObjectSchema), z.lazy(() => ReportChangeLogWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportChangeLogWhereUniqueInputObjectSchema), z.lazy(() => ReportChangeLogWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportChangeLogUpdateWithWhereUniqueWithoutChangedByInputObjectSchema), z.lazy(() => ReportChangeLogUpdateWithWhereUniqueWithoutChangedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportChangeLogUpdateManyWithWhereWithoutChangedByInputObjectSchema), z.lazy(() => ReportChangeLogUpdateManyWithWhereWithoutChangedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportChangeLogScalarWhereInputObjectSchema), z.lazy(() => ReportChangeLogScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportChangeLogUpdateManyWithoutChangedByNestedInputObjectSchema: z.ZodType<Prisma.ReportChangeLogUpdateManyWithoutChangedByNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportChangeLogUpdateManyWithoutChangedByNestedInput>;
export const ReportChangeLogUpdateManyWithoutChangedByNestedInputObjectZodSchema = makeSchema();
