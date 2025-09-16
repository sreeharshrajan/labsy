import { z } from 'zod';
export const DoctorDeleteManyResultSchema = z.object({
  count: z.number()
});