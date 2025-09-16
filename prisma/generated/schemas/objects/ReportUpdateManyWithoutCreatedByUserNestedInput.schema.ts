import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportCreateWithoutCreatedByUserInputObjectSchema } from './ReportCreateWithoutCreatedByUserInput.schema';
import { ReportUncheckedCreateWithoutCreatedByUserInputObjectSchema } from './ReportUncheckedCreateWithoutCreatedByUserInput.schema';
import { ReportCreateOrConnectWithoutCreatedByUserInputObjectSchema } from './ReportCreateOrConnectWithoutCreatedByUserInput.schema';
import { ReportUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema } from './ReportUpsertWithWhereUniqueWithoutCreatedByUserInput.schema';
import { ReportCreateManyCreatedByUserInputEnvelopeObjectSchema } from './ReportCreateManyCreatedByUserInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema } from './ReportUpdateWithWhereUniqueWithoutCreatedByUserInput.schema';
import { ReportUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema } from './ReportUpdateManyWithWhereWithoutCreatedByUserInput.schema';
import { ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => ReportCreateWithoutCreatedByUserInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutCreatedByUserInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema), z.lazy(() => ReportUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyCreatedByUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema), z.lazy(() => ReportUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema), z.lazy(() => ReportUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportScalarWhereInputObjectSchema), z.lazy(() => ReportScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportUpdateManyWithoutCreatedByUserNestedInputObjectSchema: z.ZodType<Prisma.ReportUpdateManyWithoutCreatedByUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateManyWithoutCreatedByUserNestedInput>;
export const ReportUpdateManyWithoutCreatedByUserNestedInputObjectZodSchema = makeSchema();
