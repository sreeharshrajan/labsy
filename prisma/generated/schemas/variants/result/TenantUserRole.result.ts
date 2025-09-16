import { z } from 'zod';

// prettier-ignore
export const TenantUserRoleResultSchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    tenantUserId: z.string(),
    roleId: z.string(),
    tenantUser: z.unknown(),
    role: z.unknown()
}).strict();

export type TenantUserRoleResultType = z.infer<typeof TenantUserRoleResultSchema>;
