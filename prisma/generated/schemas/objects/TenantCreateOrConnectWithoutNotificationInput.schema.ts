import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantCreateWithoutNotificationInputObjectSchema } from './TenantCreateWithoutNotificationInput.schema';
import { TenantUncheckedCreateWithoutNotificationInputObjectSchema } from './TenantUncheckedCreateWithoutNotificationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantCreateWithoutNotificationInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutNotificationInputObjectSchema)])
}).strict();
export const TenantCreateOrConnectWithoutNotificationInputObjectSchema: z.ZodType<Prisma.TenantCreateOrConnectWithoutNotificationInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateOrConnectWithoutNotificationInput>;
export const TenantCreateOrConnectWithoutNotificationInputObjectZodSchema = makeSchema();
