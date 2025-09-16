import { z } from 'zod';
export const ReportTemplateFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  name: z.string(),
  unit: z.string().optional(),
  reference: z.string().optional(),
  notes: z.string().optional(),
  isActive: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional(),
  tenantId: z.string(),
  serviceId: z.string(),
  tenant: z.unknown(),
  service: z.unknown(),
  ReportDetails: z.array(z.unknown()),
  ReportParameter: z.array(z.unknown())
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});