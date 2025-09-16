import { z } from 'zod';
export const SubscriptionDeleteManyResultSchema = z.object({
  count: z.number()
});