import { z } from 'zod';

// prettier-ignore
export const TenantUserRoleInputSchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    tenantUserId: z.string(),
    roleId: z.string(),
    tenantUser: z.unknown(),
    role: z.unknown()
}).strict();

export type TenantUserRoleInputType = z.infer<typeof TenantUserRoleInputSchema>;
