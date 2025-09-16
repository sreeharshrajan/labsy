import { z } from 'zod';

import { AuditLogActionSchema } from '../../enums/AuditLogAction.schema';
// prettier-ignore
export const AuditLogModelSchema = z.object({
    id: z.string(),
    action: AuditLogActionSchema,
    metadata: z.unknown().nullable(),
    entity: z.string().nullable(),
    entityId: z.string().nullable(),
    ipAddress: z.string().nullable(),
    userAgent: z.string().nullable(),
    createdAt: z.date(),
    tenantId: z.string(),
    userId: z.string().nullable(),
    tenant: z.unknown(),
    user: z.unknown().nullable()
}).strict();

export type AuditLogModelType = z.infer<typeof AuditLogModelSchema>;
