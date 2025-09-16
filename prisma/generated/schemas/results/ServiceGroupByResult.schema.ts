import { z } from 'zod';
export const ServiceGroupByResultSchema = z.array(z.object({
  id: z.string(),
  name: z.string(),
  code: z.string(),
  description: z.string(),
  price: z.number(),
  isActive: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date(),
  tenantId: z.string(),
  categoryId: z.string(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    code: z.number(),
    description: z.number(),
    price: z.number(),
    isActive: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    deletedAt: z.number(),
    tenantId: z.number(),
    categoryId: z.number(),
    Tenant: z.number(),
    Category: z.number(),
    ReportInvoiceItem: z.number(),
    ReportDetail: z.number(),
    ReportTemplate: z.number(),
    ReportInvoice: z.number()
  }).optional(),
  _sum: z.object({
    price: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    price: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    code: z.string().nullable(),
    description: z.string().nullable(),
    price: z.number().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable(),
    tenantId: z.string().nullable(),
    categoryId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    code: z.string().nullable(),
    description: z.string().nullable(),
    price: z.number().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable(),
    tenantId: z.string().nullable(),
    categoryId: z.string().nullable()
  }).nullable().optional()
}));