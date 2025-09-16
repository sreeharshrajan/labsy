import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TenantRoleCountOrderByAggregateInputObjectSchema } from './TenantRoleCountOrderByAggregateInput.schema';
import { TenantRoleMaxOrderByAggregateInputObjectSchema } from './TenantRoleMaxOrderByAggregateInput.schema';
import { TenantRoleMinOrderByAggregateInputObjectSchema } from './TenantRoleMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isSystem: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  systemRoleTemplateId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tenantId: SortOrderSchema.optional(),
  _count: z.lazy(() => TenantRoleCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TenantRoleMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TenantRoleMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TenantRoleOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TenantRoleOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleOrderByWithAggregationInput>;
export const TenantRoleOrderByWithAggregationInputObjectZodSchema = makeSchema();
