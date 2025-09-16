import { z } from 'zod';

// prettier-ignore
export const TenantPermissionModelSchema = z.object({
    id: z.string(),
    action: z.string(),
    resource: z.string(),
    roleId: z.string(),
    role: z.unknown()
}).strict();

export type TenantPermissionModelType = z.infer<typeof TenantPermissionModelSchema>;
