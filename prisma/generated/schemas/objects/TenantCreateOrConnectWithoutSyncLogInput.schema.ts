import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantCreateWithoutSyncLogInputObjectSchema } from './TenantCreateWithoutSyncLogInput.schema';
import { TenantUncheckedCreateWithoutSyncLogInputObjectSchema } from './TenantUncheckedCreateWithoutSyncLogInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantCreateWithoutSyncLogInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutSyncLogInputObjectSchema)])
}).strict();
export const TenantCreateOrConnectWithoutSyncLogInputObjectSchema: z.ZodType<Prisma.TenantCreateOrConnectWithoutSyncLogInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateOrConnectWithoutSyncLogInput>;
export const TenantCreateOrConnectWithoutSyncLogInputObjectZodSchema = makeSchema();
