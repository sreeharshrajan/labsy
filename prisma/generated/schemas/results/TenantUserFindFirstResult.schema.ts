import { z } from 'zod';
export const TenantUserFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional(),
  tenantRoles: z.array(z.unknown()),
  userId: z.string(),
  tenantId: z.string(),
  user: z.unknown(),
  tenant: z.unknown(),
  Report: z.array(z.unknown()),
  reportUpdates: z.array(z.unknown()),
  collectedBy: z.array(z.unknown())
}));