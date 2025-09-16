import { z } from 'zod';
import { SubscriptionSelectObjectSchema } from './objects/SubscriptionSelect.schema';
import { SubscriptionCreateManyInputObjectSchema } from './objects/SubscriptionCreateManyInput.schema';

export const SubscriptionCreateManyAndReturnSchema = z.object({ select: SubscriptionSelectObjectSchema.optional(), data: z.union([ SubscriptionCreateManyInputObjectSchema, z.array(SubscriptionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()