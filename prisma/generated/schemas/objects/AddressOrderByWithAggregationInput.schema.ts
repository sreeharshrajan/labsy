import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AddressCountOrderByAggregateInputObjectSchema } from './AddressCountOrderByAggregateInput.schema';
import { AddressMaxOrderByAggregateInputObjectSchema } from './AddressMaxOrderByAggregateInput.schema';
import { AddressMinOrderByAggregateInputObjectSchema } from './AddressMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  line1: SortOrderSchema.optional(),
  line2: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  city: SortOrderSchema.optional(),
  state: SortOrderSchema.optional(),
  zip: SortOrderSchema.optional(),
  country: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => AddressCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AddressMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AddressMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AddressOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AddressOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressOrderByWithAggregationInput>;
export const AddressOrderByWithAggregationInputObjectZodSchema = makeSchema();
