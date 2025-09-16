import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  customerId: z.literal(true).optional(),
  addressId: z.literal(true).optional(),
  isPrimary: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const CustomerAddressMaxAggregateInputObjectSchema: z.ZodType<Prisma.CustomerAddressMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressMaxAggregateInputType>;
export const CustomerAddressMaxAggregateInputObjectZodSchema = makeSchema();
