import { z } from 'zod';
export const SystemPermissionCreateResultSchema = z.object({
  id: z.string(),
  action: z.string(),
  resource: z.string(),
  conditions: z.unknown().optional(),
  roleTemplateId: z.string(),
  roleTemplate: z.unknown()
});