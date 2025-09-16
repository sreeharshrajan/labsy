import { z } from 'zod';
export const PostUpsertResultSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  metaData: z.unknown().optional(),
  content: z.unknown(),
  isActive: z.boolean(),
  User: z.unknown(),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional()
});