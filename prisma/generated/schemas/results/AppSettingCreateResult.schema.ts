import { z } from 'zod';
export const AppSettingCreateResultSchema = z.object({
  id: z.string(),
  key: z.string(),
  value: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional(),
  values: z.array(z.unknown())
});