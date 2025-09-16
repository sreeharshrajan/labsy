import { z } from 'zod';

// prettier-ignore
export const TenantRoleResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().nullable(),
    isSystem: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
    permissions: z.array(z.unknown()),
    systemRoleTemplateId: z.string().nullable(),
    systemRoleTemplate: z.unknown().nullable(),
    tenantId: z.string(),
    tenant: z.unknown(),
    TenantUserRole: z.array(z.unknown())
}).strict();

export type TenantRoleResultType = z.infer<typeof TenantRoleResultSchema>;
