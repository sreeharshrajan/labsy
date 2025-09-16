import { z } from 'zod';
export const TenantPermissionFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  action: z.string(),
  resource: z.string(),
  roleId: z.string(),
  role: z.unknown()
}));