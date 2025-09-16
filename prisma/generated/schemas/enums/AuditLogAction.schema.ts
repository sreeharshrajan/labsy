import { z } from 'zod';

export const AuditLogActionSchema = z.enum(['CREATED', 'UPDATED', 'DELETED', 'VIEWED', 'APPROVED'])

export type AuditLogAction = z.infer<typeof AuditLogActionSchema>;