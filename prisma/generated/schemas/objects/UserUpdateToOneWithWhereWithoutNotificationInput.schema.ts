import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutNotificationInputObjectSchema } from './UserUpdateWithoutNotificationInput.schema';
import { UserUncheckedUpdateWithoutNotificationInputObjectSchema } from './UserUncheckedUpdateWithoutNotificationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutNotificationInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutNotificationInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutNotificationInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutNotificationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutNotificationInput>;
export const UserUpdateToOneWithWhereWithoutNotificationInputObjectZodSchema = makeSchema();
