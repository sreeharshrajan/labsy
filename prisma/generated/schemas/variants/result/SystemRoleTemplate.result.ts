import { z } from 'zod';

import { RoleSchema } from '../../enums/Role.schema';
// prettier-ignore
export const SystemRoleTemplateResultSchema = z.object({
    id: z.string(),
    role: RoleSchema,
    name: z.string(),
    description: z.string().nullable(),
    isDefault: z.boolean(),
    tenantRoles: z.array(z.unknown()),
    permissions: z.array(z.unknown())
}).strict();

export type SystemRoleTemplateResultType = z.infer<typeof SystemRoleTemplateResultSchema>;
