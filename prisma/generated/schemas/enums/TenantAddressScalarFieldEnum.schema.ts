import { z } from 'zod';

export const TenantAddressScalarFieldEnumSchema = z.enum(['id', 'tenantId', 'addressId', 'isPrimary', 'createdAt'])

export type TenantAddressScalarFieldEnum = z.infer<typeof TenantAddressScalarFieldEnumSchema>;