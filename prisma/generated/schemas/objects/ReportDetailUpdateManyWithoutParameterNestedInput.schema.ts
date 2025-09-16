import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportDetailCreateWithoutParameterInputObjectSchema } from './ReportDetailCreateWithoutParameterInput.schema';
import { ReportDetailUncheckedCreateWithoutParameterInputObjectSchema } from './ReportDetailUncheckedCreateWithoutParameterInput.schema';
import { ReportDetailCreateOrConnectWithoutParameterInputObjectSchema } from './ReportDetailCreateOrConnectWithoutParameterInput.schema';
import { ReportDetailUpsertWithWhereUniqueWithoutParameterInputObjectSchema } from './ReportDetailUpsertWithWhereUniqueWithoutParameterInput.schema';
import { ReportDetailCreateManyParameterInputEnvelopeObjectSchema } from './ReportDetailCreateManyParameterInputEnvelope.schema';
import { ReportDetailWhereUniqueInputObjectSchema } from './ReportDetailWhereUniqueInput.schema';
import { ReportDetailUpdateWithWhereUniqueWithoutParameterInputObjectSchema } from './ReportDetailUpdateWithWhereUniqueWithoutParameterInput.schema';
import { ReportDetailUpdateManyWithWhereWithoutParameterInputObjectSchema } from './ReportDetailUpdateManyWithWhereWithoutParameterInput.schema';
import { ReportDetailScalarWhereInputObjectSchema } from './ReportDetailScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportDetailCreateWithoutParameterInputObjectSchema), z.lazy(() => ReportDetailCreateWithoutParameterInputObjectSchema).array(), z.lazy(() => ReportDetailUncheckedCreateWithoutParameterInputObjectSchema), z.lazy(() => ReportDetailUncheckedCreateWithoutParameterInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportDetailCreateOrConnectWithoutParameterInputObjectSchema), z.lazy(() => ReportDetailCreateOrConnectWithoutParameterInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportDetailUpsertWithWhereUniqueWithoutParameterInputObjectSchema), z.lazy(() => ReportDetailUpsertWithWhereUniqueWithoutParameterInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportDetailCreateManyParameterInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportDetailWhereUniqueInputObjectSchema), z.lazy(() => ReportDetailWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportDetailWhereUniqueInputObjectSchema), z.lazy(() => ReportDetailWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportDetailWhereUniqueInputObjectSchema), z.lazy(() => ReportDetailWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportDetailWhereUniqueInputObjectSchema), z.lazy(() => ReportDetailWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportDetailUpdateWithWhereUniqueWithoutParameterInputObjectSchema), z.lazy(() => ReportDetailUpdateWithWhereUniqueWithoutParameterInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportDetailUpdateManyWithWhereWithoutParameterInputObjectSchema), z.lazy(() => ReportDetailUpdateManyWithWhereWithoutParameterInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportDetailScalarWhereInputObjectSchema), z.lazy(() => ReportDetailScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportDetailUpdateManyWithoutParameterNestedInputObjectSchema: z.ZodType<Prisma.ReportDetailUpdateManyWithoutParameterNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailUpdateManyWithoutParameterNestedInput>;
export const ReportDetailUpdateManyWithoutParameterNestedInputObjectZodSchema = makeSchema();
