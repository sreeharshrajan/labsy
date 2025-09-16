import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NotificationCreateWithoutTenantInputObjectSchema } from './NotificationCreateWithoutTenantInput.schema';
import { NotificationUncheckedCreateWithoutTenantInputObjectSchema } from './NotificationUncheckedCreateWithoutTenantInput.schema';
import { NotificationCreateOrConnectWithoutTenantInputObjectSchema } from './NotificationCreateOrConnectWithoutTenantInput.schema';
import { NotificationCreateManyTenantInputEnvelopeObjectSchema } from './NotificationCreateManyTenantInputEnvelope.schema';
import { NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => NotificationCreateWithoutTenantInputObjectSchema), z.lazy(() => NotificationCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => NotificationUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => NotificationUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => NotificationCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => NotificationCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => NotificationCreateManyTenantInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => NotificationWhereUniqueInputObjectSchema), z.lazy(() => NotificationWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const NotificationUncheckedCreateNestedManyWithoutTenantInputObjectSchema: z.ZodType<Prisma.NotificationUncheckedCreateNestedManyWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationUncheckedCreateNestedManyWithoutTenantInput>;
export const NotificationUncheckedCreateNestedManyWithoutTenantInputObjectZodSchema = makeSchema();
