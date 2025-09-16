import { z } from 'zod';

// prettier-ignore
export const TenantUserModelSchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
    tenantRoles: z.array(z.unknown()),
    userId: z.string(),
    tenantId: z.string(),
    user: z.unknown(),
    tenant: z.unknown(),
    Report: z.array(z.unknown()),
    reportUpdates: z.array(z.unknown()),
    collectedBy: z.array(z.unknown())
}).strict();

export type TenantUserModelType = z.infer<typeof TenantUserModelSchema>;
