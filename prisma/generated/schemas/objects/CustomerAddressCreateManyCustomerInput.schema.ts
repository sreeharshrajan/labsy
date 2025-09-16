import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  addressId: z.string(),
  isPrimary: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const CustomerAddressCreateManyCustomerInputObjectSchema: z.ZodType<Prisma.CustomerAddressCreateManyCustomerInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressCreateManyCustomerInput>;
export const CustomerAddressCreateManyCustomerInputObjectZodSchema = makeSchema();
