import { z } from 'zod';

import { DoctorCommissionStatusSchema } from '../../enums/DoctorCommissionStatus.schema';
// prettier-ignore
export const DoctorCommissionLogInputSchema = z.object({
    id: z.string(),
    doctorId: z.string(),
    invoiceId: z.string().optional().nullable(),
    commissionId: z.string(),
    reportDetailId: z.string().optional().nullable(),
    commissionAmt: z.number(),
    commissionStatus: DoctorCommissionStatusSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
    commission: z.unknown(),
    doctor: z.unknown(),
    invoice: z.unknown().optional().nullable(),
    reportDetail: z.unknown().optional().nullable()
}).strict();

export type DoctorCommissionLogInputType = z.infer<typeof DoctorCommissionLogInputSchema>;
