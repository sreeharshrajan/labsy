import { z } from 'zod';

// prettier-ignore
export const SystemPermissionInputSchema = z.object({
    id: z.string(),
    action: z.string(),
    resource: z.string(),
    conditions: z.unknown().optional().nullable(),
    roleTemplateId: z.string(),
    roleTemplate: z.unknown()
}).strict();

export type SystemPermissionInputType = z.infer<typeof SystemPermissionInputSchema>;
