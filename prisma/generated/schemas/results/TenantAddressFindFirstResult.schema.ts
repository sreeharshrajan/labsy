import { z } from 'zod';
export const TenantAddressFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  tenantId: z.string(),
  addressId: z.string(),
  isPrimary: z.boolean(),
  createdAt: z.date(),
  tenant: z.unknown(),
  address: z.unknown(),
  Report: z.array(z.unknown())
}));