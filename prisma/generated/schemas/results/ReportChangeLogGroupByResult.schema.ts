import { z } from 'zod';
export const ReportChangeLogGroupByResultSchema = z.array(z.object({
  id: z.string(),
  reportId: z.string(),
  userId: z.string(),
  changedById: z.string(),
  editVersion: z.number().int(),
  changes: z.unknown(),
  timestamp: z.date(),
  conflictResolved: z.boolean(),
  _count: z.object({
    id: z.number(),
    reportId: z.number(),
    userId: z.number(),
    changedById: z.number(),
    editVersion: z.number(),
    changes: z.number(),
    timestamp: z.number(),
    conflictResolved: z.number(),
    action: z.number(),
    User: z.number(),
    changedBy: z.number(),
    report: z.number()
  }).optional(),
  _sum: z.object({
    editVersion: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    editVersion: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    reportId: z.string().nullable(),
    userId: z.string().nullable(),
    changedById: z.string().nullable(),
    editVersion: z.number().int().nullable(),
    timestamp: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    reportId: z.string().nullable(),
    userId: z.string().nullable(),
    changedById: z.string().nullable(),
    editVersion: z.number().int().nullable(),
    timestamp: z.date().nullable()
  }).nullable().optional()
}));