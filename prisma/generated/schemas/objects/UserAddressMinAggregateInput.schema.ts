import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  addressId: z.literal(true).optional(),
  isPrimary: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const UserAddressMinAggregateInputObjectSchema: z.ZodType<Prisma.UserAddressMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UserAddressMinAggregateInputType>;
export const UserAddressMinAggregateInputObjectZodSchema = makeSchema();
