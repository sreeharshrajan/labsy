import { z } from 'zod';

// prettier-ignore
export const UserAddressResultSchema = z.object({
    id: z.string(),
    userId: z.string(),
    addressId: z.string(),
    isPrimary: z.boolean(),
    createdAt: z.date(),
    user: z.unknown(),
    address: z.unknown()
}).strict();

export type UserAddressResultType = z.infer<typeof UserAddressResultSchema>;
