import { z } from 'zod';

// prettier-ignore
export const DoctorAddressResultSchema = z.object({
    id: z.string(),
    doctorId: z.string(),
    addressId: z.string(),
    isPrimary: z.boolean(),
    createdAt: z.date(),
    deletedAt: z.date().nullable(),
    doctor: z.unknown(),
    address: z.unknown()
}).strict();

export type DoctorAddressResultType = z.infer<typeof DoctorAddressResultSchema>;
