import { z } from 'zod';

export const ServiceCategoryScalarFieldEnumSchema = z.enum(['id', 'createdAt', 'updatedAt', 'deletedAt', 'name', 'slug', 'tenantId'])

export type ServiceCategoryScalarFieldEnum = z.infer<typeof ServiceCategoryScalarFieldEnumSchema>;