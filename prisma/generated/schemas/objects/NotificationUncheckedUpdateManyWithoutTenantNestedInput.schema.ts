import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NotificationCreateWithoutTenantInputObjectSchema } from './NotificationCreateWithoutTenantInput.schema';
import { NotificationUncheckedCreateWithoutTenantInputObjectSchema } from './NotificationUncheckedCreateWithoutTenantInput.schema';
import { NotificationCreateOrConnectWithoutTenantInputObjectSchema } from './NotificationCreateOrConnectWithoutTenantInput.schema';
import { NotificationUpsertWithWhereUniqueWithoutTenantInputObjectSchema } from './NotificationUpsertWithWhereUniqueWithoutTenantInput.schema';
import { NotificationCreateManyTenantInputEnvelopeObjectSchema } from './NotificationCreateManyTenantInputEnvelope.schema';
import { NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema';
import { NotificationUpdateWithWhereUniqueWithoutTenantInputObjectSchema } from './NotificationUpdateWithWhereUniqueWithoutTenantInput.schema';
import { NotificationUpdateManyWithWhereWithoutTenantInputObjectSchema } from './NotificationUpdateManyWithWhereWithoutTenantInput.schema';
import { NotificationScalarWhereInputObjectSchema } from './NotificationScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => NotificationCreateWithoutTenantInputObjectSchema), z.lazy(() => NotificationCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => NotificationUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => NotificationUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => NotificationCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => NotificationCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => NotificationUpsertWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => NotificationUpsertWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => NotificationCreateManyTenantInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => NotificationWhereUniqueInputObjectSchema), z.lazy(() => NotificationWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => NotificationWhereUniqueInputObjectSchema), z.lazy(() => NotificationWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => NotificationWhereUniqueInputObjectSchema), z.lazy(() => NotificationWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => NotificationWhereUniqueInputObjectSchema), z.lazy(() => NotificationWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => NotificationUpdateWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => NotificationUpdateWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => NotificationUpdateManyWithWhereWithoutTenantInputObjectSchema), z.lazy(() => NotificationUpdateManyWithWhereWithoutTenantInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => NotificationScalarWhereInputObjectSchema), z.lazy(() => NotificationScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const NotificationUncheckedUpdateManyWithoutTenantNestedInputObjectSchema: z.ZodType<Prisma.NotificationUncheckedUpdateManyWithoutTenantNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationUncheckedUpdateManyWithoutTenantNestedInput>;
export const NotificationUncheckedUpdateManyWithoutTenantNestedInputObjectZodSchema = makeSchema();
