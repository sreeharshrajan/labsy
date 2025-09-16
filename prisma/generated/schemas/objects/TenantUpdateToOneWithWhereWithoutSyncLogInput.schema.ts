import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { TenantUpdateWithoutSyncLogInputObjectSchema } from './TenantUpdateWithoutSyncLogInput.schema';
import { TenantUncheckedUpdateWithoutSyncLogInputObjectSchema } from './TenantUncheckedUpdateWithoutSyncLogInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TenantUpdateWithoutSyncLogInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutSyncLogInputObjectSchema)])
}).strict();
export const TenantUpdateToOneWithWhereWithoutSyncLogInputObjectSchema: z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutSyncLogInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutSyncLogInput>;
export const TenantUpdateToOneWithWhereWithoutSyncLogInputObjectZodSchema = makeSchema();
