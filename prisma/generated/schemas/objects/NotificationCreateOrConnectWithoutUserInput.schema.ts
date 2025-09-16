import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema';
import { NotificationCreateWithoutUserInputObjectSchema } from './NotificationCreateWithoutUserInput.schema';
import { NotificationUncheckedCreateWithoutUserInputObjectSchema } from './NotificationUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => NotificationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => NotificationCreateWithoutUserInputObjectSchema), z.lazy(() => NotificationUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const NotificationCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.NotificationCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationCreateOrConnectWithoutUserInput>;
export const NotificationCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
