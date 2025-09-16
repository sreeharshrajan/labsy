import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PageContentCountOrderByAggregateInputObjectSchema } from './PageContentCountOrderByAggregateInput.schema';
import { PageContentMaxOrderByAggregateInputObjectSchema } from './PageContentMaxOrderByAggregateInput.schema';
import { PageContentMinOrderByAggregateInputObjectSchema } from './PageContentMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  section: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  pageId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => PageContentCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => PageContentMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => PageContentMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const PageContentOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.PageContentOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.PageContentOrderByWithAggregationInput>;
export const PageContentOrderByWithAggregationInputObjectZodSchema = makeSchema();
