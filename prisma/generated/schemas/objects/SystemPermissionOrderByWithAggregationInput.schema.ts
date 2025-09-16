import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { SystemPermissionCountOrderByAggregateInputObjectSchema } from './SystemPermissionCountOrderByAggregateInput.schema';
import { SystemPermissionMaxOrderByAggregateInputObjectSchema } from './SystemPermissionMaxOrderByAggregateInput.schema';
import { SystemPermissionMinOrderByAggregateInputObjectSchema } from './SystemPermissionMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  action: SortOrderSchema.optional(),
  resource: SortOrderSchema.optional(),
  conditions: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  roleTemplateId: SortOrderSchema.optional(),
  _count: z.lazy(() => SystemPermissionCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => SystemPermissionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => SystemPermissionMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const SystemPermissionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.SystemPermissionOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemPermissionOrderByWithAggregationInput>;
export const SystemPermissionOrderByWithAggregationInputObjectZodSchema = makeSchema();
