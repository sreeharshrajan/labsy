import { z } from 'zod';

// prettier-ignore
export const SystemPermissionModelSchema = z.object({
    id: z.string(),
    action: z.string(),
    resource: z.string(),
    conditions: z.unknown().nullable(),
    roleTemplateId: z.string(),
    roleTemplate: z.unknown()
}).strict();

export type SystemPermissionModelType = z.infer<typeof SystemPermissionModelSchema>;
