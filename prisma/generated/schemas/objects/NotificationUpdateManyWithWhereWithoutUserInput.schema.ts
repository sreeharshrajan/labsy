import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NotificationScalarWhereInputObjectSchema } from './NotificationScalarWhereInput.schema';
import { NotificationUpdateManyMutationInputObjectSchema } from './NotificationUpdateManyMutationInput.schema';
import { NotificationUncheckedUpdateManyWithoutUserInputObjectSchema } from './NotificationUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => NotificationScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => NotificationUpdateManyMutationInputObjectSchema), z.lazy(() => NotificationUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const NotificationUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.NotificationUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationUpdateManyWithWhereWithoutUserInput>;
export const NotificationUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
