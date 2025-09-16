import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ServiceCountOrderByAggregateInputObjectSchema } from './ServiceCountOrderByAggregateInput.schema';
import { ServiceAvgOrderByAggregateInputObjectSchema } from './ServiceAvgOrderByAggregateInput.schema';
import { ServiceMaxOrderByAggregateInputObjectSchema } from './ServiceMaxOrderByAggregateInput.schema';
import { ServiceMinOrderByAggregateInputObjectSchema } from './ServiceMinOrderByAggregateInput.schema';
import { ServiceSumOrderByAggregateInputObjectSchema } from './ServiceSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  code: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  price: SortOrderSchema.optional(),
  isActive: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tenantId: SortOrderSchema.optional(),
  categoryId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => ServiceCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ServiceAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ServiceMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ServiceMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ServiceSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ServiceOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ServiceOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceOrderByWithAggregationInput>;
export const ServiceOrderByWithAggregationInputObjectZodSchema = makeSchema();
