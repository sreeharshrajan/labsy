import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateWithoutSyncLogInputObjectSchema } from './TenantCreateWithoutSyncLogInput.schema';
import { TenantUncheckedCreateWithoutSyncLogInputObjectSchema } from './TenantUncheckedCreateWithoutSyncLogInput.schema';
import { TenantCreateOrConnectWithoutSyncLogInputObjectSchema } from './TenantCreateOrConnectWithoutSyncLogInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutSyncLogInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutSyncLogInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutSyncLogInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional()
}).strict();
export const TenantCreateNestedOneWithoutSyncLogInputObjectSchema: z.ZodType<Prisma.TenantCreateNestedOneWithoutSyncLogInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateNestedOneWithoutSyncLogInput>;
export const TenantCreateNestedOneWithoutSyncLogInputObjectZodSchema = makeSchema();
