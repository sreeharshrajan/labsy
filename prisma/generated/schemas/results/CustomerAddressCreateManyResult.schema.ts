import { z } from 'zod';
export const CustomerAddressCreateManyResultSchema = z.object({
  count: z.number()
});