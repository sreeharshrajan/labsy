import { z } from 'zod';
export const DoctorCommissionLogUpsertResultSchema = z.object({
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
});