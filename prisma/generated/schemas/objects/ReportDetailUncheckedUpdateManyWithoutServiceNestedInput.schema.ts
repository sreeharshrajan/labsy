import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportDetailCreateWithoutServiceInputObjectSchema } from './ReportDetailCreateWithoutServiceInput.schema';
import { ReportDetailUncheckedCreateWithoutServiceInputObjectSchema } from './ReportDetailUncheckedCreateWithoutServiceInput.schema';
import { ReportDetailCreateOrConnectWithoutServiceInputObjectSchema } from './ReportDetailCreateOrConnectWithoutServiceInput.schema';
import { ReportDetailUpsertWithWhereUniqueWithoutServiceInputObjectSchema } from './ReportDetailUpsertWithWhereUniqueWithoutServiceInput.schema';
import { ReportDetailCreateManyServiceInputEnvelopeObjectSchema } from './ReportDetailCreateManyServiceInputEnvelope.schema';
import { ReportDetailWhereUniqueInputObjectSchema } from './ReportDetailWhereUniqueInput.schema';
import { ReportDetailUpdateWithWhereUniqueWithoutServiceInputObjectSchema } from './ReportDetailUpdateWithWhereUniqueWithoutServiceInput.schema';
import { ReportDetailUpdateManyWithWhereWithoutServiceInputObjectSchema } from './ReportDetailUpdateManyWithWhereWithoutServiceInput.schema';
import { ReportDetailScalarWhereInputObjectSchema } from './ReportDetailScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportDetailCreateWithoutServiceInputObjectSchema), z.lazy(() => ReportDetailCreateWithoutServiceInputObjectSchema).array(), z.lazy(() => ReportDetailUncheckedCreateWithoutServiceInputObjectSchema), z.lazy(() => ReportDetailUncheckedCreateWithoutServiceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportDetailCreateOrConnectWithoutServiceInputObjectSchema), z.lazy(() => ReportDetailCreateOrConnectWithoutServiceInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportDetailUpsertWithWhereUniqueWithoutServiceInputObjectSchema), z.lazy(() => ReportDetailUpsertWithWhereUniqueWithoutServiceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportDetailCreateManyServiceInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportDetailWhereUniqueInputObjectSchema), z.lazy(() => ReportDetailWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportDetailWhereUniqueInputObjectSchema), z.lazy(() => ReportDetailWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportDetailWhereUniqueInputObjectSchema), z.lazy(() => ReportDetailWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportDetailWhereUniqueInputObjectSchema), z.lazy(() => ReportDetailWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportDetailUpdateWithWhereUniqueWithoutServiceInputObjectSchema), z.lazy(() => ReportDetailUpdateWithWhereUniqueWithoutServiceInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportDetailUpdateManyWithWhereWithoutServiceInputObjectSchema), z.lazy(() => ReportDetailUpdateManyWithWhereWithoutServiceInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportDetailScalarWhereInputObjectSchema), z.lazy(() => ReportDetailScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportDetailUncheckedUpdateManyWithoutServiceNestedInputObjectSchema: z.ZodType<Prisma.ReportDetailUncheckedUpdateManyWithoutServiceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailUncheckedUpdateManyWithoutServiceNestedInput>;
export const ReportDetailUncheckedUpdateManyWithoutServiceNestedInputObjectZodSchema = makeSchema();
