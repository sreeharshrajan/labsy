import { z } from 'zod';
import { NotificationSelectObjectSchema } from './objects/NotificationSelect.schema';
import { NotificationCreateManyInputObjectSchema } from './objects/NotificationCreateManyInput.schema';

export const NotificationCreateManyAndReturnSchema = z.object({ select: NotificationSelectObjectSchema.optional(), data: z.union([ NotificationCreateManyInputObjectSchema, z.array(NotificationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()