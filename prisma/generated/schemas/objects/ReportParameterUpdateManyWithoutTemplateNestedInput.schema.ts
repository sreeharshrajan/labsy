import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportParameterCreateWithoutTemplateInputObjectSchema } from './ReportParameterCreateWithoutTemplateInput.schema';
import { ReportParameterUncheckedCreateWithoutTemplateInputObjectSchema } from './ReportParameterUncheckedCreateWithoutTemplateInput.schema';
import { ReportParameterCreateOrConnectWithoutTemplateInputObjectSchema } from './ReportParameterCreateOrConnectWithoutTemplateInput.schema';
import { ReportParameterUpsertWithWhereUniqueWithoutTemplateInputObjectSchema } from './ReportParameterUpsertWithWhereUniqueWithoutTemplateInput.schema';
import { ReportParameterCreateManyTemplateInputEnvelopeObjectSchema } from './ReportParameterCreateManyTemplateInputEnvelope.schema';
import { ReportParameterWhereUniqueInputObjectSchema } from './ReportParameterWhereUniqueInput.schema';
import { ReportParameterUpdateWithWhereUniqueWithoutTemplateInputObjectSchema } from './ReportParameterUpdateWithWhereUniqueWithoutTemplateInput.schema';
import { ReportParameterUpdateManyWithWhereWithoutTemplateInputObjectSchema } from './ReportParameterUpdateManyWithWhereWithoutTemplateInput.schema';
import { ReportParameterScalarWhereInputObjectSchema } from './ReportParameterScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportParameterCreateWithoutTemplateInputObjectSchema), z.lazy(() => ReportParameterCreateWithoutTemplateInputObjectSchema).array(), z.lazy(() => ReportParameterUncheckedCreateWithoutTemplateInputObjectSchema), z.lazy(() => ReportParameterUncheckedCreateWithoutTemplateInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportParameterCreateOrConnectWithoutTemplateInputObjectSchema), z.lazy(() => ReportParameterCreateOrConnectWithoutTemplateInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportParameterUpsertWithWhereUniqueWithoutTemplateInputObjectSchema), z.lazy(() => ReportParameterUpsertWithWhereUniqueWithoutTemplateInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportParameterCreateManyTemplateInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportParameterWhereUniqueInputObjectSchema), z.lazy(() => ReportParameterWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportParameterWhereUniqueInputObjectSchema), z.lazy(() => ReportParameterWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportParameterWhereUniqueInputObjectSchema), z.lazy(() => ReportParameterWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportParameterWhereUniqueInputObjectSchema), z.lazy(() => ReportParameterWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportParameterUpdateWithWhereUniqueWithoutTemplateInputObjectSchema), z.lazy(() => ReportParameterUpdateWithWhereUniqueWithoutTemplateInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportParameterUpdateManyWithWhereWithoutTemplateInputObjectSchema), z.lazy(() => ReportParameterUpdateManyWithWhereWithoutTemplateInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportParameterScalarWhereInputObjectSchema), z.lazy(() => ReportParameterScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportParameterUpdateManyWithoutTemplateNestedInputObjectSchema: z.ZodType<Prisma.ReportParameterUpdateManyWithoutTemplateNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportParameterUpdateManyWithoutTemplateNestedInput>;
export const ReportParameterUpdateManyWithoutTemplateNestedInputObjectZodSchema = makeSchema();
