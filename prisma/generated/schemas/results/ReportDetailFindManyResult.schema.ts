import { z } from 'zod';
export const ReportDetailFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  parameterName: z.string().optional(),
  parameterUnit: z.string().optional(),
  parameterReferenceMin: z.number().optional(),
  parameterReferenceMax: z.number().optional(),
  resultText: z.string().optional(),
  resultValue: z.number().optional(),
  remarks: z.string().optional(),
  amount: z.number().optional(),
  createdAt: z.date(),
  lastEditedAt: z.date(),
  deletedAt: z.date().optional(),
  reportId: z.string(),
  parameterId: z.string(),
  report: z.unknown(),
  parameter: z.unknown(),
  serviceId: z.string().optional(),
  Service: z.unknown().optional(),
  reportTemplateId: z.string().optional(),
  ReportTemplate: z.unknown().optional(),
  DoctorCommissionLog: z.array(z.unknown())
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