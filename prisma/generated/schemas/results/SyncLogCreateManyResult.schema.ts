import { z } from 'zod';
export const SyncLogCreateManyResultSchema = z.object({
  count: z.number()
});