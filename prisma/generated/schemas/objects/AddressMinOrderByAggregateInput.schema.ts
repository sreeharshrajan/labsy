import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  line1: SortOrderSchema.optional(),
  line2: SortOrderSchema.optional(),
  city: SortOrderSchema.optional(),
  state: SortOrderSchema.optional(),
  zip: SortOrderSchema.optional(),
  country: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const AddressMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AddressMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressMinOrderByAggregateInput>;
export const AddressMinOrderByAggregateInputObjectZodSchema = makeSchema();
