import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SyncLogWhereUniqueInputObjectSchema } from './SyncLogWhereUniqueInput.schema';
import { SyncLogUpdateWithoutTenantInputObjectSchema } from './SyncLogUpdateWithoutTenantInput.schema';
import { SyncLogUncheckedUpdateWithoutTenantInputObjectSchema } from './SyncLogUncheckedUpdateWithoutTenantInput.schema';
import { SyncLogCreateWithoutTenantInputObjectSchema } from './SyncLogCreateWithoutTenantInput.schema';
import { SyncLogUncheckedCreateWithoutTenantInputObjectSchema } from './SyncLogUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SyncLogWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SyncLogUpdateWithoutTenantInputObjectSchema), z.lazy(() => SyncLogUncheckedUpdateWithoutTenantInputObjectSchema)]),
  create: z.union([z.lazy(() => SyncLogCreateWithoutTenantInputObjectSchema), z.lazy(() => SyncLogUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const SyncLogUpsertWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.SyncLogUpsertWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.SyncLogUpsertWithWhereUniqueWithoutTenantInput>;
export const SyncLogUpsertWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
