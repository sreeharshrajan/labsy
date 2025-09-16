import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportCreateWithoutLabAddressInputObjectSchema } from './ReportCreateWithoutLabAddressInput.schema';
import { ReportUncheckedCreateWithoutLabAddressInputObjectSchema } from './ReportUncheckedCreateWithoutLabAddressInput.schema';
import { ReportCreateOrConnectWithoutLabAddressInputObjectSchema } from './ReportCreateOrConnectWithoutLabAddressInput.schema';
import { ReportUpsertWithWhereUniqueWithoutLabAddressInputObjectSchema } from './ReportUpsertWithWhereUniqueWithoutLabAddressInput.schema';
import { ReportCreateManyLabAddressInputEnvelopeObjectSchema } from './ReportCreateManyLabAddressInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithWhereUniqueWithoutLabAddressInputObjectSchema } from './ReportUpdateWithWhereUniqueWithoutLabAddressInput.schema';
import { ReportUpdateManyWithWhereWithoutLabAddressInputObjectSchema } from './ReportUpdateManyWithWhereWithoutLabAddressInput.schema';
import { ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutLabAddressInputObjectSchema), z.lazy(() => ReportCreateWithoutLabAddressInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutLabAddressInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutLabAddressInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutLabAddressInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutLabAddressInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportUpsertWithWhereUniqueWithoutLabAddressInputObjectSchema), z.lazy(() => ReportUpsertWithWhereUniqueWithoutLabAddressInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyLabAddressInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportUpdateWithWhereUniqueWithoutLabAddressInputObjectSchema), z.lazy(() => ReportUpdateWithWhereUniqueWithoutLabAddressInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportUpdateManyWithWhereWithoutLabAddressInputObjectSchema), z.lazy(() => ReportUpdateManyWithWhereWithoutLabAddressInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportScalarWhereInputObjectSchema), z.lazy(() => ReportScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportUpdateManyWithoutLabAddressNestedInputObjectSchema: z.ZodType<Prisma.ReportUpdateManyWithoutLabAddressNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateManyWithoutLabAddressNestedInput>;
export const ReportUpdateManyWithoutLabAddressNestedInputObjectZodSchema = makeSchema();
