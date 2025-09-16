import { z } from 'zod';
export const PageFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  content: z.unknown(),
  isActive: z.boolean(),
  metaData: z.unknown().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional(),
  pageContents: z.array(z.unknown())
}));