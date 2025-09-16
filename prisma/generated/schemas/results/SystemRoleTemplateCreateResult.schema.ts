import { z } from 'zod';
export const SystemRoleTemplateCreateResultSchema = z.object({
  id: z.string(),
  role: z.unknown(),
  name: z.string(),
  description: z.string().optional(),
  isDefault: z.boolean(),
  tenantRoles: z.array(z.unknown()),
  permissions: z.array(z.unknown())
});