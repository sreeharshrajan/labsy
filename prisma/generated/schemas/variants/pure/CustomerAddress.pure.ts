import { z } from 'zod';

// prettier-ignore
export const CustomerAddressModelSchema = z.object({
    id: z.string(),
    customerId: z.string(),
    addressId: z.string(),
    isPrimary: z.boolean(),
    createdAt: z.date(),
    customer: z.unknown(),
    address: z.unknown(),
    Report: z.array(z.unknown())
}).strict();

export type CustomerAddressModelType = z.infer<typeof CustomerAddressModelSchema>;
