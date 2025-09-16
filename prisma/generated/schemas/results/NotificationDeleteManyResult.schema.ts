import { z } from 'zod';
export const NotificationDeleteManyResultSchema = z.object({
  count: z.number()
});