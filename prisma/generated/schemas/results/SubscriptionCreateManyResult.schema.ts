import { z } from 'zod';
export const SubscriptionCreateManyResultSchema = z.object({
  count: z.number()
});