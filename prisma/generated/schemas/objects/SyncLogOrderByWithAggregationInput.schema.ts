import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { SyncLogCountOrderByAggregateInputObjectSchema } from './SyncLogCountOrderByAggregateInput.schema';
import { SyncLogMaxOrderByAggregateInputObjectSchema } from './SyncLogMaxOrderByAggregateInput.schema';
import { SyncLogMinOrderByAggregateInputObjectSchema } from './SyncLogMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional(),
  entity: SortOrderSchema.optional(),
  entityId: SortOrderSchema.optional(),
  details: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status: SortOrderSchema.optional(),
  operation: SortOrderSchema.optional(),
  syncedAt: SortOrderSchema.optional(),
  startedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => SyncLogCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => SyncLogMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => SyncLogMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const SyncLogOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.SyncLogOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.SyncLogOrderByWithAggregationInput>;
export const SyncLogOrderByWithAggregationInputObjectZodSchema = makeSchema();
