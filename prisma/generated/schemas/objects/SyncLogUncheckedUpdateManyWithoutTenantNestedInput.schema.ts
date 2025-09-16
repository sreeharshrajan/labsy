import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SyncLogCreateWithoutTenantInputObjectSchema } from './SyncLogCreateWithoutTenantInput.schema';
import { SyncLogUncheckedCreateWithoutTenantInputObjectSchema } from './SyncLogUncheckedCreateWithoutTenantInput.schema';
import { SyncLogCreateOrConnectWithoutTenantInputObjectSchema } from './SyncLogCreateOrConnectWithoutTenantInput.schema';
import { SyncLogUpsertWithWhereUniqueWithoutTenantInputObjectSchema } from './SyncLogUpsertWithWhereUniqueWithoutTenantInput.schema';
import { SyncLogCreateManyTenantInputEnvelopeObjectSchema } from './SyncLogCreateManyTenantInputEnvelope.schema';
import { SyncLogWhereUniqueInputObjectSchema } from './SyncLogWhereUniqueInput.schema';
import { SyncLogUpdateWithWhereUniqueWithoutTenantInputObjectSchema } from './SyncLogUpdateWithWhereUniqueWithoutTenantInput.schema';
import { SyncLogUpdateManyWithWhereWithoutTenantInputObjectSchema } from './SyncLogUpdateManyWithWhereWithoutTenantInput.schema';
import { SyncLogScalarWhereInputObjectSchema } from './SyncLogScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SyncLogCreateWithoutTenantInputObjectSchema), z.lazy(() => SyncLogCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => SyncLogUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => SyncLogUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SyncLogCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => SyncLogCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SyncLogUpsertWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => SyncLogUpsertWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SyncLogCreateManyTenantInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SyncLogWhereUniqueInputObjectSchema), z.lazy(() => SyncLogWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SyncLogWhereUniqueInputObjectSchema), z.lazy(() => SyncLogWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SyncLogWhereUniqueInputObjectSchema), z.lazy(() => SyncLogWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SyncLogWhereUniqueInputObjectSchema), z.lazy(() => SyncLogWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SyncLogUpdateWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => SyncLogUpdateWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SyncLogUpdateManyWithWhereWithoutTenantInputObjectSchema), z.lazy(() => SyncLogUpdateManyWithWhereWithoutTenantInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SyncLogScalarWhereInputObjectSchema), z.lazy(() => SyncLogScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SyncLogUncheckedUpdateManyWithoutTenantNestedInputObjectSchema: z.ZodType<Prisma.SyncLogUncheckedUpdateManyWithoutTenantNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SyncLogUncheckedUpdateManyWithoutTenantNestedInput>;
export const SyncLogUncheckedUpdateManyWithoutTenantNestedInputObjectZodSchema = makeSchema();
