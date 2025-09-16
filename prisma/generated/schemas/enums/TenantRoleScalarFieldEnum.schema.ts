import { z } from 'zod';

export const TenantRoleScalarFieldEnumSchema = z.enum(['id', 'name', 'description', 'isSystem', 'createdAt', 'updatedAt', 'systemRoleTemplateId', 'tenantId'])

export type TenantRoleScalarFieldEnum = z.infer<typeof TenantRoleScalarFieldEnumSchema>;