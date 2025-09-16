import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TenantUserCountOrderByAggregateInputObjectSchema } from './TenantUserCountOrderByAggregateInput.schema';
import { TenantUserMaxOrderByAggregateInputObjectSchema } from './TenantUserMaxOrderByAggregateInput.schema';
import { TenantUserMinOrderByAggregateInputObjectSchema } from './TenantUserMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  userId: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional(),
  _count: z.lazy(() => TenantUserCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TenantUserMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TenantUserMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TenantUserOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TenantUserOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserOrderByWithAggregationInput>;
export const TenantUserOrderByWithAggregationInputObjectZodSchema = makeSchema();
