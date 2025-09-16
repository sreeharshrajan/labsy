import { z } from 'zod';
export const DoctorCreateManyResultSchema = z.object({
  count: z.number()
});