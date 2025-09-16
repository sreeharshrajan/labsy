import { z } from 'zod';

export const TenantScalarFieldEnumSchema = z.enum(['id', 'name', 'slug', 'labLicenseNumber', 'contactEmail', 'contactPhone', 'gstin', 'isActive', 'createdAt', 'updatedAt', 'deletedAt', 'canManageRoles', 'maxCustomRoles', 'maxUsers'])

export type TenantScalarFieldEnum = z.infer<typeof TenantScalarFieldEnumSchema>;