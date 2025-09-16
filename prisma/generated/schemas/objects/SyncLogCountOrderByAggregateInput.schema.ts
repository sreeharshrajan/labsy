import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional(),
  entity: SortOrderSchema.optional(),
  entityId: SortOrderSchema.optional(),
  details: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  operation: SortOrderSchema.optional(),
  syncedAt: SortOrderSchema.optional(),
  startedAt: SortOrderSchema.optional()
}).strict();
export const SyncLogCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SyncLogCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SyncLogCountOrderByAggregateInput>;
export const SyncLogCountOrderByAggregateInputObjectZodSchema = makeSchema();
