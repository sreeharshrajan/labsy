import { z } from 'zod';
export const PageGroupByResultSchema = z.array(z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  content: z.unknown(),
  isActive: z.boolean(),
  metaData: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    slug: z.number(),
    content: z.number(),
    isActive: z.number(),
    metaData: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    deletedAt: z.number(),
    pageContents: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    slug: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    slug: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable()
  }).nullable().optional()
}));