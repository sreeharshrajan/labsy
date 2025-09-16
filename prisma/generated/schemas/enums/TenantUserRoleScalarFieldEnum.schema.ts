import { z } from 'zod';

export const TenantUserRoleScalarFieldEnumSchema = z.enum(['id', 'createdAt', 'tenantUserId', 'roleId'])

export type TenantUserRoleScalarFieldEnum = z.infer<typeof TenantUserRoleScalarFieldEnumSchema>;