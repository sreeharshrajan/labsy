import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema';
import { NotificationUpdateWithoutTenantInputObjectSchema } from './NotificationUpdateWithoutTenantInput.schema';
import { NotificationUncheckedUpdateWithoutTenantInputObjectSchema } from './NotificationUncheckedUpdateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => NotificationWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => NotificationUpdateWithoutTenantInputObjectSchema), z.lazy(() => NotificationUncheckedUpdateWithoutTenantInputObjectSchema)])
}).strict();
export const NotificationUpdateWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.NotificationUpdateWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationUpdateWithWhereUniqueWithoutTenantInput>;
export const NotificationUpdateWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
