import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema';
import { NotificationUpdateWithoutUserInputObjectSchema } from './NotificationUpdateWithoutUserInput.schema';
import { NotificationUncheckedUpdateWithoutUserInputObjectSchema } from './NotificationUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => NotificationWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => NotificationUpdateWithoutUserInputObjectSchema), z.lazy(() => NotificationUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const NotificationUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.NotificationUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationUpdateWithWhereUniqueWithoutUserInput>;
export const NotificationUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
