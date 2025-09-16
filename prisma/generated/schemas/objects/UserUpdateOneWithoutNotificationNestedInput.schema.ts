import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutNotificationInputObjectSchema } from './UserCreateWithoutNotificationInput.schema';
import { UserUncheckedCreateWithoutNotificationInputObjectSchema } from './UserUncheckedCreateWithoutNotificationInput.schema';
import { UserCreateOrConnectWithoutNotificationInputObjectSchema } from './UserCreateOrConnectWithoutNotificationInput.schema';
import { UserUpsertWithoutNotificationInputObjectSchema } from './UserUpsertWithoutNotificationInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutNotificationInputObjectSchema } from './UserUpdateToOneWithWhereWithoutNotificationInput.schema';
import { UserUpdateWithoutNotificationInputObjectSchema } from './UserUpdateWithoutNotificationInput.schema';
import { UserUncheckedUpdateWithoutNotificationInputObjectSchema } from './UserUncheckedUpdateWithoutNotificationInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutNotificationInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutNotificationInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutNotificationInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutNotificationInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutNotificationInputObjectSchema), z.lazy(() => UserUpdateWithoutNotificationInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutNotificationInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutNotificationNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutNotificationNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneWithoutNotificationNestedInput>;
export const UserUpdateOneWithoutNotificationNestedInputObjectZodSchema = makeSchema();
