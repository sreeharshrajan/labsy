import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SyncLogWhereUniqueInputObjectSchema } from './SyncLogWhereUniqueInput.schema';
import { SyncLogUpdateWithoutTenantInputObjectSchema } from './SyncLogUpdateWithoutTenantInput.schema';
import { SyncLogUncheckedUpdateWithoutTenantInputObjectSchema } from './SyncLogUncheckedUpdateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SyncLogWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SyncLogUpdateWithoutTenantInputObjectSchema), z.lazy(() => SyncLogUncheckedUpdateWithoutTenantInputObjectSchema)])
}).strict();
export const SyncLogUpdateWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.SyncLogUpdateWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.SyncLogUpdateWithWhereUniqueWithoutTenantInput>;
export const SyncLogUpdateWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
