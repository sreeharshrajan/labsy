import { z } from 'zod';
export const TenantDeleteManyResultSchema = z.object({
  count: z.number()
});