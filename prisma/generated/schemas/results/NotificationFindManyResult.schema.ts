import { z } from 'zod';
export const NotificationFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  tenantId: z.string(),
  tenant: z.unknown(),
  userId: z.string().optional(),
  user: z.unknown().optional(),
  type: z.string(),
  title: z.string(),
  message: z.string(),
  isRead: z.boolean(),
  metadata: z.unknown().optional(),
  createdAt: z.date(),
  readAt: z.date().optional()
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