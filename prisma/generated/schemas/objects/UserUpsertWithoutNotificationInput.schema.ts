import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutNotificationInputObjectSchema } from './UserUpdateWithoutNotificationInput.schema';
import { UserUncheckedUpdateWithoutNotificationInputObjectSchema } from './UserUncheckedUpdateWithoutNotificationInput.schema';
import { UserCreateWithoutNotificationInputObjectSchema } from './UserCreateWithoutNotificationInput.schema';
import { UserUncheckedCreateWithoutNotificationInputObjectSchema } from './UserUncheckedCreateWithoutNotificationInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutNotificationInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutNotificationInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutNotificationInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutNotificationInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutNotificationInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutNotificationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutNotificationInput>;
export const UserUpsertWithoutNotificationInputObjectZodSchema = makeSchema();
