import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportChangeLogCreateWithoutUserInputObjectSchema } from './ReportChangeLogCreateWithoutUserInput.schema';
import { ReportChangeLogUncheckedCreateWithoutUserInputObjectSchema } from './ReportChangeLogUncheckedCreateWithoutUserInput.schema';
import { ReportChangeLogCreateOrConnectWithoutUserInputObjectSchema } from './ReportChangeLogCreateOrConnectWithoutUserInput.schema';
import { ReportChangeLogUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './ReportChangeLogUpsertWithWhereUniqueWithoutUserInput.schema';
import { ReportChangeLogCreateManyUserInputEnvelopeObjectSchema } from './ReportChangeLogCreateManyUserInputEnvelope.schema';
import { ReportChangeLogWhereUniqueInputObjectSchema } from './ReportChangeLogWhereUniqueInput.schema';
import { ReportChangeLogUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './ReportChangeLogUpdateWithWhereUniqueWithoutUserInput.schema';
import { ReportChangeLogUpdateManyWithWhereWithoutUserInputObjectSchema } from './ReportChangeLogUpdateManyWithWhereWithoutUserInput.schema';
import { ReportChangeLogScalarWhereInputObjectSchema } from './ReportChangeLogScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportChangeLogCreateWithoutUserInputObjectSchema), z.lazy(() => ReportChangeLogCreateWithoutUserInputObjectSchema).array(), z.lazy(() => ReportChangeLogUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => ReportChangeLogUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportChangeLogCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => ReportChangeLogCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportChangeLogUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => ReportChangeLogUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportChangeLogCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportChangeLogWhereUniqueInputObjectSchema), z.lazy(() => ReportChangeLogWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportChangeLogWhereUniqueInputObjectSchema), z.lazy(() => ReportChangeLogWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportChangeLogWhereUniqueInputObjectSchema), z.lazy(() => ReportChangeLogWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportChangeLogWhereUniqueInputObjectSchema), z.lazy(() => ReportChangeLogWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportChangeLogUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => ReportChangeLogUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportChangeLogUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => ReportChangeLogUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportChangeLogScalarWhereInputObjectSchema), z.lazy(() => ReportChangeLogScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportChangeLogUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.ReportChangeLogUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportChangeLogUncheckedUpdateManyWithoutUserNestedInput>;
export const ReportChangeLogUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
