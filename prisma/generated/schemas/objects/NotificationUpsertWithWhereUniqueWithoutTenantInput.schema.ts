import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema';
import { NotificationUpdateWithoutTenantInputObjectSchema } from './NotificationUpdateWithoutTenantInput.schema';
import { NotificationUncheckedUpdateWithoutTenantInputObjectSchema } from './NotificationUncheckedUpdateWithoutTenantInput.schema';
import { NotificationCreateWithoutTenantInputObjectSchema } from './NotificationCreateWithoutTenantInput.schema';
import { NotificationUncheckedCreateWithoutTenantInputObjectSchema } from './NotificationUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => NotificationWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => NotificationUpdateWithoutTenantInputObjectSchema), z.lazy(() => NotificationUncheckedUpdateWithoutTenantInputObjectSchema)]),
  create: z.union([z.lazy(() => NotificationCreateWithoutTenantInputObjectSchema), z.lazy(() => NotificationUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const NotificationUpsertWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.NotificationUpsertWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationUpsertWithWhereUniqueWithoutTenantInput>;
export const NotificationUpsertWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
