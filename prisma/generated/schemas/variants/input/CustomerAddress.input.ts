import { z } from 'zod';

// prettier-ignore
export const CustomerAddressInputSchema = z.object({
    id: z.string(),
    customerId: z.string(),
    addressId: z.string(),
    isPrimary: z.boolean(),
    createdAt: z.date(),
    customer: z.unknown(),
    address: z.unknown(),
    Report: z.array(z.unknown())
}).strict();

export type CustomerAddressInputType = z.infer<typeof CustomerAddressInputSchema>;
