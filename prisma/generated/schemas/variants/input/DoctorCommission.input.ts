import { z } from 'zod';

// prettier-ignore
export const DoctorCommissionInputSchema = z.object({
    id: z.string(),
    commissionType: z.string(),
    value: z.number(),
    isActive: z.boolean(),
    notes: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().optional().nullable(),
    doctorId: z.string(),
    doctor: z.unknown(),
    DoctorCommissionLog: z.array(z.unknown())
}).strict();

export type DoctorCommissionInputType = z.infer<typeof DoctorCommissionInputSchema>;
