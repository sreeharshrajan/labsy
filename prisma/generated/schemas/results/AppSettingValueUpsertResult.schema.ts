import { z } from 'zod';
export const AppSettingValueUpsertResultSchema = z.object({
  id: z.string(),
  settingId: z.string(),
  setting: z.unknown(),
  value: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional()
});