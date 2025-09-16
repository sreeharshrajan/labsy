import { z } from 'zod';

// prettier-ignore
export const NotificationInputSchema = z.object({
    id: z.string(),
    tenantId: z.string(),
    tenant: z.unknown(),
    userId: z.string().optional().nullable(),
    user: z.unknown().optional().nullable(),
    type: z.string(),
    title: z.string(),
    message: z.string(),
    isRead: z.boolean(),
    metadata: z.unknown().optional().nullable(),
    createdAt: z.date(),
    readAt: z.date().optional().nullable()
}).strict();

export type NotificationInputType = z.infer<typeof NotificationInputSchema>;
