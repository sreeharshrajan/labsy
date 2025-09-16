import { z } from 'zod';
export const DoctorCommissionLogFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  doctorId: z.string(),
  invoiceId: z.string().optional(),
  commissionId: z.string(),
  reportDetailId: z.string().optional(),
  commissionAmt: z.number(),
  commissionStatus: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date(),
  commission: z.unknown(),
  doctor: z.unknown(),
  invoice: z.unknown().optional(),
  reportDetail: z.unknown().optional()
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