import { z } from 'zod';

// prettier-ignore
export const DoctorCommissionModelSchema = z.object({
    id: z.string(),
    commissionType: z.string(),
    value: z.number(),
    isActive: z.boolean(),
    notes: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
    doctorId: z.string(),
    doctor: z.unknown(),
    DoctorCommissionLog: z.array(z.unknown())
}).strict();

export type DoctorCommissionModelType = z.infer<typeof DoctorCommissionModelSchema>;
