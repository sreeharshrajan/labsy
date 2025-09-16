import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUpdateWithoutSyncLogInputObjectSchema } from './TenantUpdateWithoutSyncLogInput.schema';
import { TenantUncheckedUpdateWithoutSyncLogInputObjectSchema } from './TenantUncheckedUpdateWithoutSyncLogInput.schema';
import { TenantCreateWithoutSyncLogInputObjectSchema } from './TenantCreateWithoutSyncLogInput.schema';
import { TenantUncheckedCreateWithoutSyncLogInputObjectSchema } from './TenantUncheckedCreateWithoutSyncLogInput.schema';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TenantUpdateWithoutSyncLogInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutSyncLogInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantCreateWithoutSyncLogInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutSyncLogInputObjectSchema)]),
  where: z.lazy(() => TenantWhereInputObjectSchema).optional()
}).strict();
export const TenantUpsertWithoutSyncLogInputObjectSchema: z.ZodType<Prisma.TenantUpsertWithoutSyncLogInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpsertWithoutSyncLogInput>;
export const TenantUpsertWithoutSyncLogInputObjectZodSchema = makeSchema();
