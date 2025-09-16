import { z } from 'zod';

// prettier-ignore
export const TenantUserInputSchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().optional().nullable(),
    tenantRoles: z.array(z.unknown()),
    userId: z.string(),
    tenantId: z.string(),
    user: z.unknown(),
    tenant: z.unknown(),
    Report: z.array(z.unknown()),
    reportUpdates: z.array(z.unknown()),
    collectedBy: z.array(z.unknown())
}).strict();

export type TenantUserInputType = z.infer<typeof TenantUserInputSchema>;
