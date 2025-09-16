import { z } from 'zod';
export const UserAddressCreateManyResultSchema = z.object({
  count: z.number()
});