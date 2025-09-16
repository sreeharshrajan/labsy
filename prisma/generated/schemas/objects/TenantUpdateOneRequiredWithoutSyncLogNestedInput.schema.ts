import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateWithoutSyncLogInputObjectSchema } from './TenantCreateWithoutSyncLogInput.schema';
import { TenantUncheckedCreateWithoutSyncLogInputObjectSchema } from './TenantUncheckedCreateWithoutSyncLogInput.schema';
import { TenantCreateOrConnectWithoutSyncLogInputObjectSchema } from './TenantCreateOrConnectWithoutSyncLogInput.schema';
import { TenantUpsertWithoutSyncLogInputObjectSchema } from './TenantUpsertWithoutSyncLogInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantUpdateToOneWithWhereWithoutSyncLogInputObjectSchema } from './TenantUpdateToOneWithWhereWithoutSyncLogInput.schema';
import { TenantUpdateWithoutSyncLogInputObjectSchema } from './TenantUpdateWithoutSyncLogInput.schema';
import { TenantUncheckedUpdateWithoutSyncLogInputObjectSchema } from './TenantUncheckedUpdateWithoutSyncLogInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutSyncLogInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutSyncLogInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutSyncLogInputObjectSchema).optional(),
  upsert: z.lazy(() => TenantUpsertWithoutSyncLogInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TenantUpdateToOneWithWhereWithoutSyncLogInputObjectSchema), z.lazy(() => TenantUpdateWithoutSyncLogInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutSyncLogInputObjectSchema)]).optional()
}).strict();
export const TenantUpdateOneRequiredWithoutSyncLogNestedInputObjectSchema: z.ZodType<Prisma.TenantUpdateOneRequiredWithoutSyncLogNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateOneRequiredWithoutSyncLogNestedInput>;
export const TenantUpdateOneRequiredWithoutSyncLogNestedInputObjectZodSchema = makeSchema();
