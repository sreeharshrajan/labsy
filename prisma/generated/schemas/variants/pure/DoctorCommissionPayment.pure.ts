import { z } from 'zod';

import { PaymentMethodSchema } from '../../enums/PaymentMethod.schema';
import { PaymentStatusSchema } from '../../enums/PaymentStatus.schema';
// prettier-ignore
export const DoctorCommissionPaymentModelSchema = z.object({
    id: z.string(),
    amount: z.number(),
    paymentDate: z.date(),
    paymentMethod: PaymentMethodSchema,
    referenceNo: z.string().nullable(),
    status: PaymentStatusSchema,
    notes: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
    doctorId: z.string(),
    doctor: z.unknown()
}).strict();

export type DoctorCommissionPaymentModelType = z.infer<typeof DoctorCommissionPaymentModelSchema>;
