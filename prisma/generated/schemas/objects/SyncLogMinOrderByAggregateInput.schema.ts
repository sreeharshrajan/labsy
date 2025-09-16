import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional(),
  entity: SortOrderSchema.optional(),
  entityId: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  operation: SortOrderSchema.optional(),
  syncedAt: SortOrderSchema.optional(),
  startedAt: SortOrderSchema.optional()
}).strict();
export const SyncLogMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SyncLogMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SyncLogMinOrderByAggregateInput>;
export const SyncLogMinOrderByAggregateInputObjectZodSchema = makeSchema();
