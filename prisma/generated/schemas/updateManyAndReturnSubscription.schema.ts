import { z } from 'zod';
import { SubscriptionSelectObjectSchema } from './objects/SubscriptionSelect.schema';
import { SubscriptionUpdateManyMutationInputObjectSchema } from './objects/SubscriptionUpdateManyMutationInput.schema';
import { SubscriptionWhereInputObjectSchema } from './objects/SubscriptionWhereInput.schema';

export const SubscriptionUpdateManyAndReturnSchema = z.object({ select: SubscriptionSelectObjectSchema.optional(), data: SubscriptionUpdateManyMutationInputObjectSchema, where: SubscriptionWhereInputObjectSchema.optional()  }).strict()