import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tenantId: z.string(),
  addressId: z.string()
}).strict();
export const TenantAddressTenantIdAddressIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.TenantAddressTenantIdAddressIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressTenantIdAddressIdCompoundUniqueInput>;
export const TenantAddressTenantIdAddressIdCompoundUniqueInputObjectZodSchema = makeSchema();
