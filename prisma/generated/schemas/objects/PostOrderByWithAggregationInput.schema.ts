import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PostCountOrderByAggregateInputObjectSchema } from './PostCountOrderByAggregateInput.schema';
import { PostMaxOrderByAggregateInputObjectSchema } from './PostMaxOrderByAggregateInput.schema';
import { PostMinOrderByAggregateInputObjectSchema } from './PostMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  metaData: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  content: SortOrderSchema.optional(),
  isActive: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => PostCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => PostMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => PostMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const PostOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.PostOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.PostOrderByWithAggregationInput>;
export const PostOrderByWithAggregationInputObjectZodSchema = makeSchema();
