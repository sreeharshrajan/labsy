import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema';
import { NotificationCreateWithoutTenantInputObjectSchema } from './NotificationCreateWithoutTenantInput.schema';
import { NotificationUncheckedCreateWithoutTenantInputObjectSchema } from './NotificationUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => NotificationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => NotificationCreateWithoutTenantInputObjectSchema), z.lazy(() => NotificationUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const NotificationCreateOrConnectWithoutTenantInputObjectSchema: z.ZodType<Prisma.NotificationCreateOrConnectWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationCreateOrConnectWithoutTenantInput>;
export const NotificationCreateOrConnectWithoutTenantInputObjectZodSchema = makeSchema();
