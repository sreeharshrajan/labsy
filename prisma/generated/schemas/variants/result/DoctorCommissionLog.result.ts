import { z } from 'zod';

import { DoctorCommissionStatusSchema } from '../../enums/DoctorCommissionStatus.schema';
// prettier-ignore
export const DoctorCommissionLogResultSchema = z.object({
    id: z.string(),
    doctorId: z.string(),
    invoiceId: z.string().nullable(),
    commissionId: z.string(),
    reportDetailId: z.string().nullable(),
    commissionAmt: z.number(),
    commissionStatus: DoctorCommissionStatusSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
    commission: z.unknown(),
    doctor: z.unknown(),
    invoice: z.unknown().nullable(),
    reportDetail: z.unknown().nullable()
}).strict();

export type DoctorCommissionLogResultType = z.infer<typeof DoctorCommissionLogResultSchema>;
