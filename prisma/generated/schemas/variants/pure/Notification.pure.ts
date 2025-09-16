import { z } from 'zod';

// prettier-ignore
export const NotificationModelSchema = z.object({
    id: z.string(),
    tenantId: z.string(),
    tenant: z.unknown(),
    userId: z.string().nullable(),
    user: z.unknown().nullable(),
    type: z.string(),
    title: z.string(),
    message: z.string(),
    isRead: z.boolean(),
    metadata: z.unknown().nullable(),
    createdAt: z.date(),
    readAt: z.date().nullable()
}).strict();

export type NotificationModelType = z.infer<typeof NotificationModelSchema>;
