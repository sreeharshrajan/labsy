import { z } from 'zod';
export const AppSettingValueAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    settingId: z.number(),
    setting: z.number(),
    value: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    deletedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    settingId: z.string().nullable(),
    value: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    settingId: z.string().nullable(),
    value: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable()
  }).nullable().optional()});