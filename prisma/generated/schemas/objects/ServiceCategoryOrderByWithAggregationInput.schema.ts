import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ServiceCategoryCountOrderByAggregateInputObjectSchema } from './ServiceCategoryCountOrderByAggregateInput.schema';
import { ServiceCategoryMaxOrderByAggregateInputObjectSchema } from './ServiceCategoryMaxOrderByAggregateInput.schema';
import { ServiceCategoryMinOrderByAggregateInputObjectSchema } from './ServiceCategoryMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  name: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional(),
  _count: z.lazy(() => ServiceCategoryCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ServiceCategoryMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ServiceCategoryMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ServiceCategoryOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ServiceCategoryOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryOrderByWithAggregationInput>;
export const ServiceCategoryOrderByWithAggregationInputObjectZodSchema = makeSchema();
