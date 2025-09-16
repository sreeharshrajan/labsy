import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TenantCountOrderByAggregateInputObjectSchema } from './TenantCountOrderByAggregateInput.schema';
import { TenantAvgOrderByAggregateInputObjectSchema } from './TenantAvgOrderByAggregateInput.schema';
import { TenantMaxOrderByAggregateInputObjectSchema } from './TenantMaxOrderByAggregateInput.schema';
import { TenantMinOrderByAggregateInputObjectSchema } from './TenantMinOrderByAggregateInput.schema';
import { TenantSumOrderByAggregateInputObjectSchema } from './TenantSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  labLicenseNumber: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  contactEmail: SortOrderSchema.optional(),
  contactPhone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  gstin: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isActive: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  canManageRoles: SortOrderSchema.optional(),
  maxCustomRoles: SortOrderSchema.optional(),
  maxUsers: SortOrderSchema.optional(),
  _count: z.lazy(() => TenantCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => TenantAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TenantMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TenantMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => TenantSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TenantOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TenantOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantOrderByWithAggregationInput>;
export const TenantOrderByWithAggregationInputObjectZodSchema = makeSchema();
