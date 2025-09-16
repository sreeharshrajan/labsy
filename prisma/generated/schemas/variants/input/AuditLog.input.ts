import { z } from 'zod';

import { AuditLogActionSchema } from '../../enums/AuditLogAction.schema';
// prettier-ignore
export const AuditLogInputSchema = z.object({
    id: z.string(),
    action: AuditLogActionSchema,
    metadata: z.unknown().optional().nullable(),
    entity: z.string().optional().nullable(),
    entityId: z.string().optional().nullable(),
    ipAddress: z.string().optional().nullable(),
    userAgent: z.string().optional().nullable(),
    createdAt: z.date(),
    tenantId: z.string(),
    userId: z.string().optional().nullable(),
    tenant: z.unknown(),
    user: z.unknown().optional().nullable()
}).strict();

export type AuditLogInputType = z.infer<typeof AuditLogInputSchema>;
