import { z } from 'zod';

// prettier-ignore
export const TenantRoleInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().optional().nullable(),
    isSystem: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
    permissions: z.array(z.unknown()),
    systemRoleTemplateId: z.string().optional().nullable(),
    systemRoleTemplate: z.unknown().optional().nullable(),
    tenantId: z.string(),
    tenant: z.unknown(),
    TenantUserRole: z.array(z.unknown())
}).strict();

export type TenantRoleInputType = z.infer<typeof TenantRoleInputSchema>;
