import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TenantUserRoleCountOrderByAggregateInputObjectSchema } from './TenantUserRoleCountOrderByAggregateInput.schema';
import { TenantUserRoleMaxOrderByAggregateInputObjectSchema } from './TenantUserRoleMaxOrderByAggregateInput.schema';
import { TenantUserRoleMinOrderByAggregateInputObjectSchema } from './TenantUserRoleMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  tenantUserId: SortOrderSchema.optional(),
  roleId: SortOrderSchema.optional(),
  _count: z.lazy(() => TenantUserRoleCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TenantUserRoleMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TenantUserRoleMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TenantUserRoleOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TenantUserRoleOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserRoleOrderByWithAggregationInput>;
export const TenantUserRoleOrderByWithAggregationInputObjectZodSchema = makeSchema();
