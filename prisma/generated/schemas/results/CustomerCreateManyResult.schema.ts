import { z } from 'zod';
export const CustomerCreateManyResultSchema = z.object({
  count: z.number()
});