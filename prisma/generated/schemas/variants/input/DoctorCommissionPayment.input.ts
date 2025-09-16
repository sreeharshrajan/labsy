import { z } from 'zod';

import { PaymentMethodSchema } from '../../enums/PaymentMethod.schema';
import { PaymentStatusSchema } from '../../enums/PaymentStatus.schema';
// prettier-ignore
export const DoctorCommissionPaymentInputSchema = z.object({
    id: z.string(),
    amount: z.number(),
    paymentDate: z.date(),
    paymentMethod: PaymentMethodSchema,
    referenceNo: z.string().optional().nullable(),
    status: PaymentStatusSchema,
    notes: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().optional().nullable(),
    doctorId: z.string(),
    doctor: z.unknown()
}).strict();

export type DoctorCommissionPaymentInputType = z.infer<typeof DoctorCommissionPaymentInputSchema>;
