import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportTemplateCreateWithoutServiceInputObjectSchema } from './ReportTemplateCreateWithoutServiceInput.schema';
import { ReportTemplateUncheckedCreateWithoutServiceInputObjectSchema } from './ReportTemplateUncheckedCreateWithoutServiceInput.schema';
import { ReportTemplateCreateOrConnectWithoutServiceInputObjectSchema } from './ReportTemplateCreateOrConnectWithoutServiceInput.schema';
import { ReportTemplateUpsertWithWhereUniqueWithoutServiceInputObjectSchema } from './ReportTemplateUpsertWithWhereUniqueWithoutServiceInput.schema';
import { ReportTemplateCreateManyServiceInputEnvelopeObjectSchema } from './ReportTemplateCreateManyServiceInputEnvelope.schema';
import { ReportTemplateWhereUniqueInputObjectSchema } from './ReportTemplateWhereUniqueInput.schema';
import { ReportTemplateUpdateWithWhereUniqueWithoutServiceInputObjectSchema } from './ReportTemplateUpdateWithWhereUniqueWithoutServiceInput.schema';
import { ReportTemplateUpdateManyWithWhereWithoutServiceInputObjectSchema } from './ReportTemplateUpdateManyWithWhereWithoutServiceInput.schema';
import { ReportTemplateScalarWhereInputObjectSchema } from './ReportTemplateScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportTemplateCreateWithoutServiceInputObjectSchema), z.lazy(() => ReportTemplateCreateWithoutServiceInputObjectSchema).array(), z.lazy(() => ReportTemplateUncheckedCreateWithoutServiceInputObjectSchema), z.lazy(() => ReportTemplateUncheckedCreateWithoutServiceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportTemplateCreateOrConnectWithoutServiceInputObjectSchema), z.lazy(() => ReportTemplateCreateOrConnectWithoutServiceInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportTemplateUpsertWithWhereUniqueWithoutServiceInputObjectSchema), z.lazy(() => ReportTemplateUpsertWithWhereUniqueWithoutServiceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportTemplateCreateManyServiceInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportTemplateWhereUniqueInputObjectSchema), z.lazy(() => ReportTemplateWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportTemplateWhereUniqueInputObjectSchema), z.lazy(() => ReportTemplateWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportTemplateWhereUniqueInputObjectSchema), z.lazy(() => ReportTemplateWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportTemplateWhereUniqueInputObjectSchema), z.lazy(() => ReportTemplateWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportTemplateUpdateWithWhereUniqueWithoutServiceInputObjectSchema), z.lazy(() => ReportTemplateUpdateWithWhereUniqueWithoutServiceInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportTemplateUpdateManyWithWhereWithoutServiceInputObjectSchema), z.lazy(() => ReportTemplateUpdateManyWithWhereWithoutServiceInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportTemplateScalarWhereInputObjectSchema), z.lazy(() => ReportTemplateScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportTemplateUncheckedUpdateManyWithoutServiceNestedInputObjectSchema: z.ZodType<Prisma.ReportTemplateUncheckedUpdateManyWithoutServiceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateUncheckedUpdateManyWithoutServiceNestedInput>;
export const ReportTemplateUncheckedUpdateManyWithoutServiceNestedInputObjectZodSchema = makeSchema();
