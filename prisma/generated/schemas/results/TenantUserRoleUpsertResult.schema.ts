import { z } from 'zod';
export const TenantUserRoleUpsertResultSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  tenantUserId: z.string(),
  roleId: z.string(),
  tenantUser: z.unknown(),
  role: z.unknown()
});