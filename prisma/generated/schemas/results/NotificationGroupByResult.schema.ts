import { z } from 'zod';
export const NotificationGroupByResultSchema = z.array(z.object({
  id: z.string(),
  tenantId: z.string(),
  userId: z.string(),
  type: z.string(),
  title: z.string(),
  message: z.string(),
  isRead: z.boolean(),
  metadata: z.unknown(),
  createdAt: z.date(),
  readAt: z.date(),
  _count: z.object({
    id: z.number(),
    tenantId: z.number(),
    tenant: z.number(),
    userId: z.number(),
    user: z.number(),
    type: z.number(),
    title: z.number(),
    message: z.number(),
    isRead: z.number(),
    metadata: z.number(),
    createdAt: z.number(),
    readAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    tenantId: z.string().nullable(),
    userId: z.string().nullable(),
    type: z.string().nullable(),
    title: z.string().nullable(),
    message: z.string().nullable(),
    createdAt: z.date().nullable(),
    readAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    tenantId: z.string().nullable(),
    userId: z.string().nullable(),
    type: z.string().nullable(),
    title: z.string().nullable(),
    message: z.string().nullable(),
    createdAt: z.date().nullable(),
    readAt: z.date().nullable()
  }).nullable().optional()
}));