import { z } from 'zod';
export const PageContentAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    section: z.number(),
    content: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    deletedAt: z.number(),
    Page: z.number(),
    pageId: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    section: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable(),
    pageId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    section: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable(),
    pageId: z.string().nullable()
  }).nullable().optional()});