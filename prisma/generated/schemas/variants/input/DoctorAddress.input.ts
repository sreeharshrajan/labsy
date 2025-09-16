import { z } from 'zod';

// prettier-ignore
export const DoctorAddressInputSchema = z.object({
    id: z.string(),
    doctorId: z.string(),
    addressId: z.string(),
    isPrimary: z.boolean(),
    createdAt: z.date(),
    deletedAt: z.date().optional().nullable(),
    doctor: z.unknown(),
    address: z.unknown()
}).strict();

export type DoctorAddressInputType = z.infer<typeof DoctorAddressInputSchema>;
