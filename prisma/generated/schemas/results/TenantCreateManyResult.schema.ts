import { z } from 'zod';
export const TenantCreateManyResultSchema = z.object({
  count: z.number()
});