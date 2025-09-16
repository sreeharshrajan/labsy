import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUpdateWithoutSubscriptionsInputObjectSchema } from './TenantUpdateWithoutSubscriptionsInput.schema';
import { TenantUncheckedUpdateWithoutSubscriptionsInputObjectSchema } from './TenantUncheckedUpdateWithoutSubscriptionsInput.schema';
import { TenantCreateWithoutSubscriptionsInputObjectSchema } from './TenantCreateWithoutSubscriptionsInput.schema';
import { TenantUncheckedCreateWithoutSubscriptionsInputObjectSchema } from './TenantUncheckedCreateWithoutSubscriptionsInput.schema';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TenantUpdateWithoutSubscriptionsInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutSubscriptionsInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantCreateWithoutSubscriptionsInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutSubscriptionsInputObjectSchema)]),
  where: z.lazy(() => TenantWhereInputObjectSchema).optional()
}).strict();
export const TenantUpsertWithoutSubscriptionsInputObjectSchema: z.ZodType<Prisma.TenantUpsertWithoutSubscriptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpsertWithoutSubscriptionsInput>;
export const TenantUpsertWithoutSubscriptionsInputObjectZodSchema = makeSchema();
