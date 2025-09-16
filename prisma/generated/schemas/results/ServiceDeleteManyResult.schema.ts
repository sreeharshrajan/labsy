import { z } from 'zod';
export const ServiceDeleteManyResultSchema = z.object({
  count: z.number()
});