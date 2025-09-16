import { z } from 'zod';

export const PostScalarFieldEnumSchema = z.enum(['id', 'title', 'slug', 'metaData', 'content', 'isActive', 'userId', 'createdAt', 'updatedAt', 'deletedAt'])

export type PostScalarFieldEnum = z.infer<typeof PostScalarFieldEnumSchema>;