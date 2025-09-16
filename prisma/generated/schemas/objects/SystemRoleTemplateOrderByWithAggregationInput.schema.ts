import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { SystemRoleTemplateCountOrderByAggregateInputObjectSchema } from './SystemRoleTemplateCountOrderByAggregateInput.schema';
import { SystemRoleTemplateMaxOrderByAggregateInputObjectSchema } from './SystemRoleTemplateMaxOrderByAggregateInput.schema';
import { SystemRoleTemplateMinOrderByAggregateInputObjectSchema } from './SystemRoleTemplateMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isDefault: SortOrderSchema.optional(),
  _count: z.lazy(() => SystemRoleTemplateCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => SystemRoleTemplateMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => SystemRoleTemplateMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const SystemRoleTemplateOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.SystemRoleTemplateOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemRoleTemplateOrderByWithAggregationInput>;
export const SystemRoleTemplateOrderByWithAggregationInputObjectZodSchema = makeSchema();
