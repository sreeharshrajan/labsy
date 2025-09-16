import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUpdateWithoutNotificationInputObjectSchema } from './TenantUpdateWithoutNotificationInput.schema';
import { TenantUncheckedUpdateWithoutNotificationInputObjectSchema } from './TenantUncheckedUpdateWithoutNotificationInput.schema';
import { TenantCreateWithoutNotificationInputObjectSchema } from './TenantCreateWithoutNotificationInput.schema';
import { TenantUncheckedCreateWithoutNotificationInputObjectSchema } from './TenantUncheckedCreateWithoutNotificationInput.schema';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TenantUpdateWithoutNotificationInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutNotificationInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantCreateWithoutNotificationInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutNotificationInputObjectSchema)]),
  where: z.lazy(() => TenantWhereInputObjectSchema).optional()
}).strict();
export const TenantUpsertWithoutNotificationInputObjectSchema: z.ZodType<Prisma.TenantUpsertWithoutNotificationInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpsertWithoutNotificationInput>;
export const TenantUpsertWithoutNotificationInputObjectZodSchema = makeSchema();
