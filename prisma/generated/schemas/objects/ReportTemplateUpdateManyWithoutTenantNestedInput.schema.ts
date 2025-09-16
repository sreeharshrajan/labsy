import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportTemplateCreateWithoutTenantInputObjectSchema } from './ReportTemplateCreateWithoutTenantInput.schema';
import { ReportTemplateUncheckedCreateWithoutTenantInputObjectSchema } from './ReportTemplateUncheckedCreateWithoutTenantInput.schema';
import { ReportTemplateCreateOrConnectWithoutTenantInputObjectSchema } from './ReportTemplateCreateOrConnectWithoutTenantInput.schema';
import { ReportTemplateUpsertWithWhereUniqueWithoutTenantInputObjectSchema } from './ReportTemplateUpsertWithWhereUniqueWithoutTenantInput.schema';
import { ReportTemplateCreateManyTenantInputEnvelopeObjectSchema } from './ReportTemplateCreateManyTenantInputEnvelope.schema';
import { ReportTemplateWhereUniqueInputObjectSchema } from './ReportTemplateWhereUniqueInput.schema';
import { ReportTemplateUpdateWithWhereUniqueWithoutTenantInputObjectSchema } from './ReportTemplateUpdateWithWhereUniqueWithoutTenantInput.schema';
import { ReportTemplateUpdateManyWithWhereWithoutTenantInputObjectSchema } from './ReportTemplateUpdateManyWithWhereWithoutTenantInput.schema';
import { ReportTemplateScalarWhereInputObjectSchema } from './ReportTemplateScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportTemplateCreateWithoutTenantInputObjectSchema), z.lazy(() => ReportTemplateCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => ReportTemplateUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => ReportTemplateUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportTemplateCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => ReportTemplateCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportTemplateUpsertWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => ReportTemplateUpsertWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportTemplateCreateManyTenantInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportTemplateWhereUniqueInputObjectSchema), z.lazy(() => ReportTemplateWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportTemplateWhereUniqueInputObjectSchema), z.lazy(() => ReportTemplateWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportTemplateWhereUniqueInputObjectSchema), z.lazy(() => ReportTemplateWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportTemplateWhereUniqueInputObjectSchema), z.lazy(() => ReportTemplateWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportTemplateUpdateWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => ReportTemplateUpdateWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportTemplateUpdateManyWithWhereWithoutTenantInputObjectSchema), z.lazy(() => ReportTemplateUpdateManyWithWhereWithoutTenantInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportTemplateScalarWhereInputObjectSchema), z.lazy(() => ReportTemplateScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportTemplateUpdateManyWithoutTenantNestedInputObjectSchema: z.ZodType<Prisma.ReportTemplateUpdateManyWithoutTenantNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateUpdateManyWithoutTenantNestedInput>;
export const ReportTemplateUpdateManyWithoutTenantNestedInputObjectZodSchema = makeSchema();
