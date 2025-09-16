import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CustomerAddressCountOrderByAggregateInputObjectSchema } from './CustomerAddressCountOrderByAggregateInput.schema';
import { CustomerAddressMaxOrderByAggregateInputObjectSchema } from './CustomerAddressMaxOrderByAggregateInput.schema';
import { CustomerAddressMinOrderByAggregateInputObjectSchema } from './CustomerAddressMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  customerId: SortOrderSchema.optional(),
  addressId: SortOrderSchema.optional(),
  isPrimary: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => CustomerAddressCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CustomerAddressMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CustomerAddressMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CustomerAddressOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CustomerAddressOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressOrderByWithAggregationInput>;
export const CustomerAddressOrderByWithAggregationInputObjectZodSchema = makeSchema();
