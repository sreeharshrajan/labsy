import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TenantPermissionCountOrderByAggregateInputObjectSchema } from './TenantPermissionCountOrderByAggregateInput.schema';
import { TenantPermissionMaxOrderByAggregateInputObjectSchema } from './TenantPermissionMaxOrderByAggregateInput.schema';
import { TenantPermissionMinOrderByAggregateInputObjectSchema } from './TenantPermissionMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  action: SortOrderSchema.optional(),
  resource: SortOrderSchema.optional(),
  roleId: SortOrderSchema.optional(),
  _count: z.lazy(() => TenantPermissionCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TenantPermissionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TenantPermissionMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TenantPermissionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TenantPermissionOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantPermissionOrderByWithAggregationInput>;
export const TenantPermissionOrderByWithAggregationInputObjectZodSchema = makeSchema();
