import { z } from 'zod';

// prettier-ignore
export const SystemPermissionResultSchema = z.object({
    id: z.string(),
    action: z.string(),
    resource: z.string(),
    conditions: z.unknown().nullable(),
    roleTemplateId: z.string(),
    roleTemplate: z.unknown()
}).strict();

export type SystemPermissionResultType = z.infer<typeof SystemPermissionResultSchema>;
