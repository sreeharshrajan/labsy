import { z } from 'zod';

import { RoleSchema } from '../../enums/Role.schema';
// prettier-ignore
export const SystemRoleTemplateInputSchema = z.object({
    id: z.string(),
    role: RoleSchema,
    name: z.string(),
    description: z.string().optional().nullable(),
    isDefault: z.boolean(),
    tenantRoles: z.array(z.unknown()),
    permissions: z.array(z.unknown())
}).strict();

export type SystemRoleTemplateInputType = z.infer<typeof SystemRoleTemplateInputSchema>;
