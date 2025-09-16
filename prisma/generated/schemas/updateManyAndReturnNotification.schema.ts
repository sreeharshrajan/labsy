import { z } from 'zod';
import { NotificationSelectObjectSchema } from './objects/NotificationSelect.schema';
import { NotificationUpdateManyMutationInputObjectSchema } from './objects/NotificationUpdateManyMutationInput.schema';
import { NotificationWhereInputObjectSchema } from './objects/NotificationWhereInput.schema';

export const NotificationUpdateManyAndReturnSchema = z.object({ select: NotificationSelectObjectSchema.optional(), data: NotificationUpdateManyMutationInputObjectSchema, where: NotificationWhereInputObjectSchema.optional()  }).strict()