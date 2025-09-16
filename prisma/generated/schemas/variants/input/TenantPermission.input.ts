import { z } from 'zod';

// prettier-ignore
export const TenantPermissionInputSchema = z.object({
    id: z.string(),
    action: z.string(),
    resource: z.string(),
    roleId: z.string(),
    role: z.unknown()
}).strict();

export type TenantPermissionInputType = z.infer<typeof TenantPermissionInputSchema>;
