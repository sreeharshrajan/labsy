import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  addressId: z.literal(true).optional(),
  isPrimary: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const UserAddressMaxAggregateInputObjectSchema: z.ZodType<Prisma.UserAddressMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UserAddressMaxAggregateInputType>;
export const UserAddressMaxAggregateInputObjectZodSchema = makeSchema();
