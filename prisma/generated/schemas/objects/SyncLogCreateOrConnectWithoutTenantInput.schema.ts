import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SyncLogWhereUniqueInputObjectSchema } from './SyncLogWhereUniqueInput.schema';
import { SyncLogCreateWithoutTenantInputObjectSchema } from './SyncLogCreateWithoutTenantInput.schema';
import { SyncLogUncheckedCreateWithoutTenantInputObjectSchema } from './SyncLogUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SyncLogWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SyncLogCreateWithoutTenantInputObjectSchema), z.lazy(() => SyncLogUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const SyncLogCreateOrConnectWithoutTenantInputObjectSchema: z.ZodType<Prisma.SyncLogCreateOrConnectWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.SyncLogCreateOrConnectWithoutTenantInput>;
export const SyncLogCreateOrConnectWithoutTenantInputObjectZodSchema = makeSchema();
