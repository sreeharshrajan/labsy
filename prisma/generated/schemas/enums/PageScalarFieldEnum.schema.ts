import { z } from 'zod';

export const PageScalarFieldEnumSchema = z.enum(['id', 'name', 'slug', 'content', 'isActive', 'metaData', 'createdAt', 'updatedAt', 'deletedAt'])

export type PageScalarFieldEnum = z.infer<typeof PageScalarFieldEnumSchema>;