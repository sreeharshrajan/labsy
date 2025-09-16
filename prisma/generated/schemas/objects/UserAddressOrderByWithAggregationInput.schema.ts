import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserAddressCountOrderByAggregateInputObjectSchema } from './UserAddressCountOrderByAggregateInput.schema';
import { UserAddressMaxOrderByAggregateInputObjectSchema } from './UserAddressMaxOrderByAggregateInput.schema';
import { UserAddressMinOrderByAggregateInputObjectSchema } from './UserAddressMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  addressId: SortOrderSchema.optional(),
  isPrimary: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => UserAddressCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => UserAddressMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => UserAddressMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const UserAddressOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.UserAddressOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAddressOrderByWithAggregationInput>;
export const UserAddressOrderByWithAggregationInputObjectZodSchema = makeSchema();
