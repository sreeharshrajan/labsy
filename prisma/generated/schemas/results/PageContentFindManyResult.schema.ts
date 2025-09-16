import { z } from 'zod';
export const PageContentFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  section: z.string(),
  content: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional(),
  Page: z.unknown().optional(),
  pageId: z.string().optional()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});