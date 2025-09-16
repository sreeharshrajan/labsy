import { z } from 'zod';
export const AppSettingGroupByResultSchema = z.array(z.object({
  id: z.string(),
  key: z.string(),
  value: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date(),
  _count: z.object({
    id: z.number(),
    key: z.number(),
    value: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    deletedAt: z.number(),
    values: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    key: z.string().nullable(),
    value: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    key: z.string().nullable(),
    value: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable()
  }).nullable().optional()
}));