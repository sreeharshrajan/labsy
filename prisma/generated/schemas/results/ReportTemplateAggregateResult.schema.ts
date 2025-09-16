import { z } from 'zod';
export const ReportTemplateAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    unit: z.number(),
    reference: z.number(),
    notes: z.number(),
    isActive: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    deletedAt: z.number(),
    tenantId: z.number(),
    serviceId: z.number(),
    tenant: z.number(),
    service: z.number(),
    ReportDetails: z.number(),
    ReportParameter: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    unit: z.string().nullable(),
    reference: z.string().nullable(),
    notes: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable(),
    tenantId: z.string().nullable(),
    serviceId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    unit: z.string().nullable(),
    reference: z.string().nullable(),
    notes: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable(),
    tenantId: z.string().nullable(),
    serviceId: z.string().nullable()
  }).nullable().optional()});