import { z } from 'zod';
export const CustomerFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  title: z.unknown().optional(),
  name: z.string(),
  email: z.string().optional(),
  phone: z.string().optional(),
  dateOfBirth: z.date().optional(),
  gender: z.unknown().optional(),
  bloodGroup: z.unknown().optional(),
  maritalStatus: z.unknown().optional(),
  aadharNumber: z.string().optional(),
  panNumber: z.string().optional(),
  passportNumber: z.string().optional(),
  knownAllergies: z.array(z.string()),
  chronicConditions: z.array(z.string()),
  medications: z.array(z.string()),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional(),
  tenantId: z.string(),
  tenant: z.unknown(),
  ReportInvoice: z.array(z.unknown()),
  Report: z.array(z.unknown()),
  customerAddresses: z.array(z.unknown())
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