import { z } from 'zod';
export const AppSettingValueFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  settingId: z.string(),
  setting: z.unknown(),
  value: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});