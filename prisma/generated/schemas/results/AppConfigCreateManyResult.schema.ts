import { z } from 'zod';
export const AppConfigCreateManyResultSchema = z.object({
  count: z.number()
});