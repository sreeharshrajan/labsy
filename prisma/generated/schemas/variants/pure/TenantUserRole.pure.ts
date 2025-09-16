import { z } from 'zod';

// prettier-ignore
export const TenantUserRoleModelSchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    tenantUserId: z.string(),
    roleId: z.string(),
    tenantUser: z.unknown(),
    role: z.unknown()
}).strict();

export type TenantUserRoleModelType = z.infer<typeof TenantUserRoleModelSchema>;
