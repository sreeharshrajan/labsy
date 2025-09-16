import { z } from 'zod';

export const NotificationScalarFieldEnumSchema = z.enum(['id', 'tenantId', 'userId', 'type', 'title', 'message', 'isRead', 'metadata', 'createdAt', 'readAt'])

export type NotificationScalarFieldEnum = z.infer<typeof NotificationScalarFieldEnumSchema>;