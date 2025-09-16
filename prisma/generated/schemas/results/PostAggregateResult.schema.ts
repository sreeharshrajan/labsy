import { z } from 'zod';
export const PostAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    title: z.number(),
    slug: z.number(),
    metaData: z.number(),
    content: z.number(),
    isActive: z.number(),
    User: z.number(),
    userId: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    deletedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    title: z.string().nullable(),
    slug: z.string().nullable(),
    userId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    title: z.string().nullable(),
    slug: z.string().nullable(),
    userId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable()
  }).nullable().optional()});