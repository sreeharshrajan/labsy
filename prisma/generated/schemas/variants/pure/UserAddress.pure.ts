import { z } from 'zod';

// prettier-ignore
export const UserAddressModelSchema = z.object({
    id: z.string(),
    userId: z.string(),
    addressId: z.string(),
    isPrimary: z.boolean(),
    createdAt: z.date(),
    user: z.unknown(),
    address: z.unknown()
}).strict();

export type UserAddressModelType = z.infer<typeof UserAddressModelSchema>;
