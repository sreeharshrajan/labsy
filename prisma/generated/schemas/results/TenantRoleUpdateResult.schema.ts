import { z } from 'zod';
export const TenantRoleUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  isSystem: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  permissions: z.array(z.unknown()),
  systemRoleTemplateId: z.string().optional(),
  systemRoleTemplate: z.unknown().optional(),
  tenantId: z.string(),
  tenant: z.unknown(),
  TenantUserRole: z.array(z.unknown())
}));