import { z } from 'zod';
export const NotificationCreateManyResultSchema = z.object({
  count: z.number()
});