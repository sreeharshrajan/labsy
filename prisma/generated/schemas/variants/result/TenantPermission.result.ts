import { z } from 'zod';

// prettier-ignore
export const TenantPermissionResultSchema = z.object({
    id: z.string(),
    action: z.string(),
    resource: z.string(),
    roleId: z.string(),
    role: z.unknown()
}).strict();

export type TenantPermissionResultType = z.infer<typeof TenantPermissionResultSchema>;
