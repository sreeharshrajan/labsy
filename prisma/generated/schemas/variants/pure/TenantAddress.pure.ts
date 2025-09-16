import { z } from 'zod';

// prettier-ignore
export const TenantAddressModelSchema = z.object({
    id: z.string(),
    tenantId: z.string(),
    addressId: z.string(),
    isPrimary: z.boolean(),
    createdAt: z.date(),
    tenant: z.unknown(),
    address: z.unknown(),
    Report: z.array(z.unknown())
}).strict();

export type TenantAddressModelType = z.infer<typeof TenantAddressModelSchema>;
