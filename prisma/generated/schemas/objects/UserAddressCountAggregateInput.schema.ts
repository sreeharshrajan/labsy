import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  addressId: z.literal(true).optional(),
  isPrimary: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const UserAddressCountAggregateInputObjectSchema: z.ZodType<Prisma.UserAddressCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UserAddressCountAggregateInputType>;
export const UserAddressCountAggregateInputObjectZodSchema = makeSchema();
