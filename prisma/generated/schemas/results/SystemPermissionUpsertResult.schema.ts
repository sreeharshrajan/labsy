import { z } from 'zod';
export const SystemPermissionUpsertResultSchema = z.object({
  id: z.string(),
  action: z.string(),
  resource: z.string(),
  conditions: z.unknown().optional(),
  roleTemplateId: z.string(),
  roleTemplate: z.unknown()
});