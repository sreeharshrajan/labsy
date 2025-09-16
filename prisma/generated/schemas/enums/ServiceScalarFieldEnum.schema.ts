import { z } from 'zod';

export const ServiceScalarFieldEnumSchema = z.enum(['id', 'name', 'code', 'description', 'price', 'isActive', 'createdAt', 'updatedAt', 'deletedAt', 'tenantId', 'categoryId'])

export type ServiceScalarFieldEnum = z.infer<typeof ServiceScalarFieldEnumSchema>;