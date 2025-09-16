import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SyncLogCreateWithoutTenantInputObjectSchema } from './SyncLogCreateWithoutTenantInput.schema';
import { SyncLogUncheckedCreateWithoutTenantInputObjectSchema } from './SyncLogUncheckedCreateWithoutTenantInput.schema';
import { SyncLogCreateOrConnectWithoutTenantInputObjectSchema } from './SyncLogCreateOrConnectWithoutTenantInput.schema';
import { SyncLogCreateManyTenantInputEnvelopeObjectSchema } from './SyncLogCreateManyTenantInputEnvelope.schema';
import { SyncLogWhereUniqueInputObjectSchema } from './SyncLogWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SyncLogCreateWithoutTenantInputObjectSchema), z.lazy(() => SyncLogCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => SyncLogUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => SyncLogUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SyncLogCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => SyncLogCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SyncLogCreateManyTenantInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SyncLogWhereUniqueInputObjectSchema), z.lazy(() => SyncLogWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SyncLogUncheckedCreateNestedManyWithoutTenantInputObjectSchema: z.ZodType<Prisma.SyncLogUncheckedCreateNestedManyWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.SyncLogUncheckedCreateNestedManyWithoutTenantInput>;
export const SyncLogUncheckedCreateNestedManyWithoutTenantInputObjectZodSchema = makeSchema();
