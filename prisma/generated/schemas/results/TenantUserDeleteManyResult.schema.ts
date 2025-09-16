import { z } from 'zod';
export const TenantUserDeleteManyResultSchema = z.object({
  count: z.number()
});