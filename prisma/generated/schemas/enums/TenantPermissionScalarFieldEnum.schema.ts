import { z } from 'zod';

export const TenantPermissionScalarFieldEnumSchema = z.enum(['id', 'action', 'resource', 'roleId'])

export type TenantPermissionScalarFieldEnum = z.infer<typeof TenantPermissionScalarFieldEnumSchema>;