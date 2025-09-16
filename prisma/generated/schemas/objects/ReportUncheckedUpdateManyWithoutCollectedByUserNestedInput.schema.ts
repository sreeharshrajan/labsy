import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportCreateWithoutCollectedByUserInputObjectSchema } from './ReportCreateWithoutCollectedByUserInput.schema';
import { ReportUncheckedCreateWithoutCollectedByUserInputObjectSchema } from './ReportUncheckedCreateWithoutCollectedByUserInput.schema';
import { ReportCreateOrConnectWithoutCollectedByUserInputObjectSchema } from './ReportCreateOrConnectWithoutCollectedByUserInput.schema';
import { ReportUpsertWithWhereUniqueWithoutCollectedByUserInputObjectSchema } from './ReportUpsertWithWhereUniqueWithoutCollectedByUserInput.schema';
import { ReportCreateManyCollectedByUserInputEnvelopeObjectSchema } from './ReportCreateManyCollectedByUserInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithWhereUniqueWithoutCollectedByUserInputObjectSchema } from './ReportUpdateWithWhereUniqueWithoutCollectedByUserInput.schema';
import { ReportUpdateManyWithWhereWithoutCollectedByUserInputObjectSchema } from './ReportUpdateManyWithWhereWithoutCollectedByUserInput.schema';
import { ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutCollectedByUserInputObjectSchema), z.lazy(() => ReportCreateWithoutCollectedByUserInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutCollectedByUserInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutCollectedByUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutCollectedByUserInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutCollectedByUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportUpsertWithWhereUniqueWithoutCollectedByUserInputObjectSchema), z.lazy(() => ReportUpsertWithWhereUniqueWithoutCollectedByUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyCollectedByUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportUpdateWithWhereUniqueWithoutCollectedByUserInputObjectSchema), z.lazy(() => ReportUpdateWithWhereUniqueWithoutCollectedByUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportUpdateManyWithWhereWithoutCollectedByUserInputObjectSchema), z.lazy(() => ReportUpdateManyWithWhereWithoutCollectedByUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportScalarWhereInputObjectSchema), z.lazy(() => ReportScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportUncheckedUpdateManyWithoutCollectedByUserNestedInputObjectSchema: z.ZodType<Prisma.ReportUncheckedUpdateManyWithoutCollectedByUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUncheckedUpdateManyWithoutCollectedByUserNestedInput>;
export const ReportUncheckedUpdateManyWithoutCollectedByUserNestedInputObjectZodSchema = makeSchema();
