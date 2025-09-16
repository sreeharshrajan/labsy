import { z } from 'zod';
export const TenantPermissionCreateResultSchema = z.object({
  id: z.string(),
  action: z.string(),
  resource: z.string(),
  roleId: z.string(),
  role: z.unknown()
});