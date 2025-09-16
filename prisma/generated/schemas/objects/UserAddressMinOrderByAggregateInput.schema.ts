import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  addressId: SortOrderSchema.optional(),
  isPrimary: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const UserAddressMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserAddressMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAddressMinOrderByAggregateInput>;
export const UserAddressMinOrderByAggregateInputObjectZodSchema = makeSchema();
