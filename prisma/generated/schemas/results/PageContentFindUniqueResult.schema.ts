import { z } from 'zod';
export const PageContentFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  section: z.string(),
  content: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional(),
  Page: z.unknown().optional(),
  pageId: z.string().optional()
}));