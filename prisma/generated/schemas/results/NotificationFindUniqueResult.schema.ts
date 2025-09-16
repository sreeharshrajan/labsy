import { z } from 'zod';
export const NotificationFindUniqueResultSchema = z.nullable(z.object({
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
}));