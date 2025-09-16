import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PageCountOrderByAggregateInputObjectSchema } from './PageCountOrderByAggregateInput.schema';
import { PageMaxOrderByAggregateInputObjectSchema } from './PageMaxOrderByAggregateInput.schema';
import { PageMinOrderByAggregateInputObjectSchema } from './PageMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  isActive: SortOrderSchema.optional(),
  metaData: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => PageCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => PageMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => PageMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const PageOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.PageOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.PageOrderByWithAggregationInput>;
export const PageOrderByWithAggregationInputObjectZodSchema = makeSchema();
