import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NotificationScalarWhereInputObjectSchema } from './NotificationScalarWhereInput.schema';
import { NotificationUpdateManyMutationInputObjectSchema } from './NotificationUpdateManyMutationInput.schema';
import { NotificationUncheckedUpdateManyWithoutTenantInputObjectSchema } from './NotificationUncheckedUpdateManyWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => NotificationScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => NotificationUpdateManyMutationInputObjectSchema), z.lazy(() => NotificationUncheckedUpdateManyWithoutTenantInputObjectSchema)])
}).strict();
export const NotificationUpdateManyWithWhereWithoutTenantInputObjectSchema: z.ZodType<Prisma.NotificationUpdateManyWithWhereWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationUpdateManyWithWhereWithoutTenantInput>;
export const NotificationUpdateManyWithWhereWithoutTenantInputObjectZodSchema = makeSchema();
