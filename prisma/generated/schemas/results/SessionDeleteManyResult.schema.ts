import { z } from 'zod';
export const SessionDeleteManyResultSchema = z.object({
  count: z.number()
});