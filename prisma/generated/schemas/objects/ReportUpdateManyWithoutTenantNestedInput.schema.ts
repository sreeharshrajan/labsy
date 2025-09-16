import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportCreateWithoutTenantInputObjectSchema } from './ReportCreateWithoutTenantInput.schema';
import { ReportUncheckedCreateWithoutTenantInputObjectSchema } from './ReportUncheckedCreateWithoutTenantInput.schema';
import { ReportCreateOrConnectWithoutTenantInputObjectSchema } from './ReportCreateOrConnectWithoutTenantInput.schema';
import { ReportUpsertWithWhereUniqueWithoutTenantInputObjectSchema } from './ReportUpsertWithWhereUniqueWithoutTenantInput.schema';
import { ReportCreateManyTenantInputEnvelopeObjectSchema } from './ReportCreateManyTenantInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithWhereUniqueWithoutTenantInputObjectSchema } from './ReportUpdateWithWhereUniqueWithoutTenantInput.schema';
import { ReportUpdateManyWithWhereWithoutTenantInputObjectSchema } from './ReportUpdateManyWithWhereWithoutTenantInput.schema';
import { ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutTenantInputObjectSchema), z.lazy(() => ReportCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportUpsertWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => ReportUpsertWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyTenantInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportUpdateWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => ReportUpdateWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportUpdateManyWithWhereWithoutTenantInputObjectSchema), z.lazy(() => ReportUpdateManyWithWhereWithoutTenantInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportScalarWhereInputObjectSchema), z.lazy(() => ReportScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportUpdateManyWithoutTenantNestedInputObjectSchema: z.ZodType<Prisma.ReportUpdateManyWithoutTenantNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateManyWithoutTenantNestedInput>;
export const ReportUpdateManyWithoutTenantNestedInputObjectZodSchema = makeSchema();
