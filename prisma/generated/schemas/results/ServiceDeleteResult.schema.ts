import { z } from 'zod';
export const ServiceDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  code: z.string().optional(),
  description: z.string().optional(),
  price: z.number(),
  isActive: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional(),
  tenantId: z.string(),
  categoryId: z.string().optional(),
  Tenant: z.unknown(),
  Category: z.unknown().optional(),
  ReportInvoiceItem: z.array(z.unknown()),
  ReportDetail: z.array(z.unknown()),
  ReportTemplate: z.array(z.unknown()),
  ReportInvoice: z.array(z.unknown())
}));