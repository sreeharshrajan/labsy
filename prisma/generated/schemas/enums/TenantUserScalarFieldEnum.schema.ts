import { z } from 'zod';

export const TenantUserScalarFieldEnumSchema = z.enum(['id', 'createdAt', 'updatedAt', 'deletedAt', 'userId', 'tenantId'])

export type TenantUserScalarFieldEnum = z.infer<typeof TenantUserScalarFieldEnumSchema>;