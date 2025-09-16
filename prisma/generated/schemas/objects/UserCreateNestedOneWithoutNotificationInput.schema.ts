import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutNotificationInputObjectSchema } from './UserCreateWithoutNotificationInput.schema';
import { UserUncheckedCreateWithoutNotificationInputObjectSchema } from './UserUncheckedCreateWithoutNotificationInput.schema';
import { UserCreateOrConnectWithoutNotificationInputObjectSchema } from './UserCreateOrConnectWithoutNotificationInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutNotificationInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutNotificationInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutNotificationInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutNotificationInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutNotificationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutNotificationInput>;
export const UserCreateNestedOneWithoutNotificationInputObjectZodSchema = makeSchema();
