import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  customerId: z.string(),
  addressId: z.string()
}).strict();
export const CustomerAddressCustomerIdAddressIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.CustomerAddressCustomerIdAddressIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressCustomerIdAddressIdCompoundUniqueInput>;
export const CustomerAddressCustomerIdAddressIdCompoundUniqueInputObjectZodSchema = makeSchema();
