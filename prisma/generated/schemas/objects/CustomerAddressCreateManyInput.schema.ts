import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  customerId: z.string(),
  addressId: z.string(),
  isPrimary: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const CustomerAddressCreateManyInputObjectSchema: z.ZodType<Prisma.CustomerAddressCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressCreateManyInput>;
export const CustomerAddressCreateManyInputObjectZodSchema = makeSchema();
