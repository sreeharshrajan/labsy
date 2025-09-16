import { z } from 'zod';

export const PageContentScalarFieldEnumSchema = z.enum(['id', 'section', 'content', 'createdAt', 'updatedAt', 'deletedAt', 'pageId'])

export type PageContentScalarFieldEnum = z.infer<typeof PageContentScalarFieldEnumSchema>;